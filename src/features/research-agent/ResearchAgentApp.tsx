// Using direct LangServe calls; no useStream
import type { Message } from "@langchain/langgraph-sdk";
import { useState, useEffect, useRef, useCallback } from "react";
import { ProcessedEvent } from "@/features/research-agent/components/ActivityTimeline";
import { WelcomeScreen } from "@/features/research-agent/components/WelcomeScreen";
import { ChatMessagesView } from "@/features/research-agent/components/ChatMessagesView";

// We are not using streaming events when calling LangServe /invoke directly.

type Configurable = {
  max_research_loops?: number;
  query_generator_model?: string;
  reflection_model?: string;
  answer_model?: string;
};

export default function ResearchAgentApp() {
  const [processedEventsTimeline, setProcessedEventsTimeline] = useState<
    ProcessedEvent[]
  >([]);
  const [historicalActivities, setHistoricalActivities] = useState<
    Record<string, ProcessedEvent[]>
  >({});
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const hasFinalizeEventOccurredRef = useRef(false);
  const [error, setError] = useState<string | null>(null);
  // Local state for messages and loading when calling LangServe directly
  const API_URL =
    (import.meta.env.VITE_API_URL as string) ||
    // Optional override via window for static hosts
    ((typeof window !== 'undefined' && (window as any).__VITE_API_URL__) as string) ||
    // Default to your Render backend URL
    'https://my-research-agent-backend.onrender.com/agent';
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  // Track a live-streaming AI message id (created when first token arrives)
  const streamingMsgIdRef = useRef<string | null>(null);
  // Persist research/model settings across screens
  const [uiSettings, setUiSettings] = useState({
    maxResearchLoops: 1,
    queryGeneratorModel: "gemini-2.5-flash-lite",
    reflectionModel: "gemini-2.5-flash-lite",
    answerModel: "gemini-2.5-flash",
  });

  // Helper to map backend event payloads to ActivityTimeline entries
  const mapToProcessedEvent = useCallback((evt: any): ProcessedEvent | null => {
    if (evt?.generate_query) {
      const queries = evt.generate_query.search_query || [];
      return { title: "Generating Search Queries", data: Array.isArray(queries) ? queries.join(", ") : String(queries) };
    }
    if (evt?.web_research) {
      const citationsList = evt.web_research?.citations_gathered || [];
      const sources = citationsList.flatMap((group: Record<string, any>) => Object.values(group || {}));
      const numSources = sources.length;
      const uniqueLabels = [...new Set(sources.map((s: any) => s?.label).filter(Boolean))];
      const exampleLabels = uniqueLabels.slice(0, 3).join(", ");
      return { title: "Web Research", data: `Gathered ${numSources} sources. Related to: ${exampleLabels || "N/A"}.` };
    }
    if (evt?.consolidate_results) return { title: "Consolidating Results", data: "Organizing research findings" };
    if (evt?.reflection) return { title: "Reflection", data: "Analysing Web Research Results" };
    if (evt?.finalize_answer) return { title: "Finalizing Answer", data: "Composing the final answer" };
    return null;
  }, []);

  // WebSocket connection for live updates
  const websocketGraph = useCallback(
    async (
      newMessages: Message[],
      configurable: Configurable
    ): Promise<void> => {
      let intentionalClose = false;
      setIsLoading(true);
      setError(null);
      setProcessedEventsTimeline([]);
      streamingMsgIdRef.current = null;
      setProcessedEventsTimeline((prev) => [
        ...prev,
        { title: "Starting", data: "Initializing graph run" },
      ]);
      if (abortRef.current) {
        try { 
          const cleanup = (abortRef.current.signal as any).cleanup;
          if (cleanup && typeof cleanup === 'function') {
            cleanup();
          }
          abortRef.current.abort(); 
        } catch { /* ignore abort errors */ }
      }
      const controller = new AbortController();
      abortRef.current = controller;
      let websocket: WebSocket | null = null;
      let runId: string | null = null;

      const initialState = {
        messages: newMessages,
        search_query: [],
        raw_web_research_result: [],
        web_research_result: [],
        citations_gathered: [],
        consolidated_citations: {},
        used_citations: {},
        max_research_loops: configurable.max_research_loops ?? 2,
        research_loop_count: 0,
        reasoning_model: configurable.answer_model ?? "gemini-2.5-pro",
      };

      const cleanup = () => {
        intentionalClose = true;
        if (websocket) {
          try {
            websocket.close(1000, "Client starting new run");
          } catch {}
        }
      };
      (controller.signal as any).cleanup = cleanup;

      try {
        const startRes = await fetch(`${API_URL}/run`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: initialState, config: { configurable } }),
          signal: controller.signal,
        });
        if (!startRes.ok) {
          const text = await startRes.text();
          throw new Error(`HTTP ${startRes.status}: ${text}`);
        }
        const started = await startRes.json();
        runId = started?.run_id;
        if (!runId) throw new Error("Missing run_id from /agent/run response");

        const wsUrl = API_URL.replace("http", "ws") + `/ws/${runId}`;
        websocket = new WebSocket(wsUrl);

        websocket.onopen = () => {};

        websocket.onmessage = (event) => {
          if (event.data === "pong") {
            return;
          }
          let message;
          try {
            message = JSON.parse(event.data);
          } catch {
            return;
          }
          switch (message.type) {
            case "init":
              if (message.data.events && Array.isArray(message.data.events)) {
                const mapped: ProcessedEvent[] = [];
                for (const e of message.data.events) {
                  const pe = mapToProcessedEvent(e);
                  if (pe) mapped.push(pe);
                }
                if (mapped.length > 0) {
                  setProcessedEventsTimeline((prev) => [...prev, ...mapped]);
                }
              }
              if (message.data && message.data.output) {
                const out = message.data.output as any;
                try {
                  const finalMessages = out?.messages;
                  if (finalMessages && Array.isArray(finalMessages)) {
                    setMessages(finalMessages as Message[]);
                    hasFinalizeEventOccurredRef.current = true;
                  } else if (typeof out === "string" || typeof out?.messages === "string") {
                    const s = (typeof out === "string") ? out : (out?.messages as string);
                    const m = s.match(/AIMessage\(content=['"]([\s\S]*?)['"]/);
                    const synthesizedAiContent = m && m[1]
                      ? m[1].replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\'/g, "'")
                      : s;
                    const aiMsg: Message = {
                      type: "ai",
                      content: synthesizedAiContent,
                      id: Date.now().toString(),
                    };
                    setMessages((prev) => [...prev, aiMsg]);
                    hasFinalizeEventOccurredRef.current = true;
                  }
                } catch {}
              }
              break;
            case "event": {
              const pe = mapToProcessedEvent(message.data);
              if (pe) {
                setProcessedEventsTimeline((prev) => [...prev, pe]);
              }
              break;
            }
            case "token": {
              const delta: string | undefined = message.data?.delta;
              if (typeof delta !== "string" || delta.length === 0) {
                break;
              }
              if (!streamingMsgIdRef.current) {
                const newId = (runId ?? Date.now().toString());
                streamingMsgIdRef.current = newId;
                setMessages((prev) => [
                  ...prev,
                  { type: "ai", content: delta, id: newId },
                ]);
              } else {
                const id = streamingMsgIdRef.current;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === id && m.type === "ai"
                      ? ({ ...m, content: (typeof m.content === "string" ? m.content : String(m.content)) + delta })
                      : m
                  )
                );
              }
              break;
            }
            case "output": {
              const finalMessages = message.data?.messages;
              if (finalMessages && Array.isArray(finalMessages)) {
                setMessages(finalMessages as Message[]);
                hasFinalizeEventOccurredRef.current = true;
                streamingMsgIdRef.current = null;
              } else {
                let synthesizedAiContent: string | null = null;
                if (typeof message.data === "string") {
                  const s = message.data as string;
                  const m = s.match(/AIMessage\(content=['"]([\s\S]*?)['"]/);
                  if (m && m[1]) {
                    synthesizedAiContent = m[1]
                      .replace(/\\n/g, "\n")
                      .replace(/\\"/g, '"')
                      .replace(/\\'/g, "'");
                  } else {
                    synthesizedAiContent = s;
                  }
                }
                if (!synthesizedAiContent && message.data && typeof message.data === "object" && typeof message.data.messages === "string") {
                  const s = message.data.messages as string;
                  const m = s.match(/AIMessage\(content=['"]([\s\S]*?)['"]/);
                  if (m && m[1]) {
                    synthesizedAiContent = m[1]
                      .replace(/\\n/g, "\n")
                      .replace(/\\"/g, '"')
                      .replace(/\\'/g, "'");
                  } else {
                    synthesizedAiContent = s;
                  }
                }
                if (synthesizedAiContent) {
                  const aiMsg: Message = {
                    type: "ai",
                    content: synthesizedAiContent,
                    id: Date.now().toString(),
                  };
                  setMessages((prev) => [...prev, aiMsg]);
                  hasFinalizeEventOccurredRef.current = true;
                  streamingMsgIdRef.current = null;
                } else {
                  setError("Received invalid final output from server.");
                }
              }
              break;
            }
            case "done":
              setIsLoading(false);
              break;
            case "error":
              setError(message.data);
              setIsLoading(false);
              break;
          }
        };

        websocket.onerror = () => {
          if (!intentionalClose) {
            setError("WebSocket connection error");
          }
        };

        websocket.onclose = (event) => {
          if (!intentionalClose) {
            if (event.code === 1006) {
              setError(
                "Connection lost. The server may have gone to sleep due to inactivity.",
              );
            } else if (event.code !== 1000) {
              setError(
                `WebSocket closed unexpectedly: ${event.reason || 'Code ' + event.code}`,
              );
            }
            setIsLoading(false);
          }
        };

        const keepAliveInterval = setInterval(() => {
          if (websocket && websocket.readyState === WebSocket.OPEN) {
            websocket.send(JSON.stringify({type: "ping"}));
          }
        }, 30000);

        const newCleanup = () => {
          intentionalClose = true;
          if (websocket) {
            try {
              websocket.close(1000, "Client cleanup");
            } catch {}
          }
          clearInterval(keepAliveInterval);
        };
        (controller.signal as any).cleanup = newCleanup;

      } catch (err: any) {
        if (err?.name !== "AbortError") {
          setError(err?.message || String(err));
        }
      } finally {
        // WebSocket will handle isLoading false on done/close
      }
    },
    [API_URL, mapToProcessedEvent]
  );

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollViewport) {
        (scrollViewport as HTMLElement).scrollTop = (scrollViewport as HTMLElement).scrollHeight;
      }
    }
  }, [messages]);

  useEffect(() => {
    if (
      hasFinalizeEventOccurredRef.current &&
      !isLoading &&
      messages.length > 0
    ) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.type === "ai" && lastMessage.id) {
        setHistoricalActivities((prev) => ({
          ...prev,
          [lastMessage.id!]: [...processedEventsTimeline],
        }));
      }
      hasFinalizeEventOccurredRef.current = false;
    }
  }, [messages, isLoading, processedEventsTimeline]);

  const handleSubmit = useCallback(
    (
      submittedInputValue: string,
      max_research_loops: number,
      query_generator_model: string,
      reflection_model: string,
      answer_model: string
    ) => {
      if (!submittedInputValue.trim()) return;
      setProcessedEventsTimeline([]);
      hasFinalizeEventOccurredRef.current = false;

      const newMessages: Message[] = [
        ...(messages || []),
        {
          type: "human",
          content: submittedInputValue,
          id: Date.now().toString(),
        },
      ];
      setMessages(newMessages);
      websocketGraph(newMessages, {
        max_research_loops,
        query_generator_model,
        reflection_model,
        answer_model,
      });
    },
    [messages, websocketGraph]
  );

  const handleCancel = useCallback(() => {
    try { abortRef.current?.abort(); } catch {}
    window.location.reload();
  }, []);

  return (
    <div className="w-full">
      {messages.length === 0 ? (
        <WelcomeScreen
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          onCancel={handleCancel}
          settings={uiSettings}
          onSettingsChange={setUiSettings}
        />
      ) : (
        <ChatMessagesView
          messages={messages}
          isLoading={isLoading}
          scrollAreaRef={scrollAreaRef}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          liveActivityEvents={processedEventsTimeline}
          historicalActivities={historicalActivities}
          error={error}
          settings={uiSettings}
          onSettingsChange={setUiSettings}
        />
      )}
    </div>
  );
}
