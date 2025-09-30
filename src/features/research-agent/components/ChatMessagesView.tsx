import type React from "react";
import type { Message as OriginalMessage } from "@langchain/langgraph-sdk";


type Message = OriginalMessage & {
  additional_kwargs?: {
    used_citations?: ConsolidatedCitations;
  };
};
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Copy, CopyCheck, Library } from "lucide-react";
import { InputForm } from "@/features/research-agent/components/InputForm";
import { Button } from "@/components/ui/button";
import { useState, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  ActivityTimeline,
  ProcessedEvent,
} from "@/features/research-agent/components/ActivityTimeline";

// Markdown component props type
type MdComponentProps = {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
};

// Markdown components
const mdComponents = {
  h1: ({ className, children, ...props }: MdComponentProps) => (
    <h1 className={cn("text-2xl font-bold mt-4 mb-2", className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }: MdComponentProps) => (
    <h2 className={cn("text-xl font-bold mt-3 mb-2", className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: MdComponentProps) => (
    <h3 className={cn("text-lg font-bold mt-3 mb-1", className)} {...props}>
      {children}
    </h3>
  ),
  p: ({ className, children, ...props }: MdComponentProps) => (
    <p className={cn("mb-3 leading-7", className)} {...props}>
      {children}
    </p>
  ),
  a: ({ className, children, href, ...props }: MdComponentProps) => (
    <Badge className="text-xs mx-0.5">
      <a
        className={cn("text-blue-400 hover:text-blue-300 text-xs", className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    </Badge>
  ),
  ul: ({ className, children, ...props }: MdComponentProps) => (
    <ul className={cn("list-disc pl-6 mb-3", className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }: MdComponentProps) => (
    <ol className={cn("list-decimal pl-6 mb-3", className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }: MdComponentProps) => (
    <li className={cn("mb-1", className)} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, children, ...props }: MdComponentProps) => (
    <blockquote
      className={cn(
        "border-l-4 border-border pl-4 italic my-3 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }: MdComponentProps) => (
    <code
      className={cn(
        "bg-muted rounded px-1 py-0.5 font-mono text-xs",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ className, children, ...props }: MdComponentProps) => (
    <pre
      className={cn(
        "bg-muted p-3 rounded-lg overflow-x-auto font-mono text-xs my-3",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  hr: ({ className, ...props }: MdComponentProps) => (
    <hr className={cn("border-border my-4", className)} {...props} />
  ),
  table: ({ className, children, ...props }: MdComponentProps) => (
    <div className="my-3 overflow-x-auto">
      <table className={cn("border-collapse w-full", className)} {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ className, children, ...props }: MdComponentProps) => (
    <th
      className={cn(
        "border border-border px-3 py-2 text-left font-bold",
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }: MdComponentProps) => (
    <td
      className={cn("border border-border px-3 py-2", className)}
      {...props}
    >
      {children}
    </td>
  ),
};

interface HumanMessageBubbleProps {
  message: Message;
  mdComponents: typeof mdComponents;
}

const HumanMessageBubble: React.FC<HumanMessageBubbleProps> = ({
  message,
  mdComponents,
}) => {
  return (
    <div className="rounded-3xl break-word min-h-7 bg-muted text-foreground max-w-[100%] sm:max-w-[90%] px-4 pt-3 rounded-br-lg">
      <ReactMarkdown components={mdComponents}>
        {typeof message.content === "string"
          ? message.content
          : JSON.stringify(message.content)}
      </ReactMarkdown>
    </div>
  );
};

interface Citation {
  id: number;
  label: string;
  value: string;
  segments: [number, number][];
}

interface ConsolidatedCitations {
    [url: string]: Citation;
}

interface AiMessageBubbleProps {
  message: Message;
  historicalActivity: ProcessedEvent[] | undefined;
  liveActivity: ProcessedEvent[] | undefined;
  isLastMessage: boolean;
  isOverallLoading: boolean;
  mdComponents: typeof mdComponents;
  handleCopy: (text: string, messageId: string) => void;
  copiedMessageId: string | null;
}

const AiMessageBubble: React.FC<AiMessageBubbleProps> = ({
  message,
  historicalActivity,
  liveActivity,
  isLastMessage,
  isOverallLoading,
  mdComponents,
  handleCopy,
  copiedMessageId,
}) => {
  const [showSources, setShowSources] = useState(false);
  const citations = message.additional_kwargs?.used_citations as ConsolidatedCitations | undefined;
  const activityForThisBubble =
    isLastMessage && isOverallLoading ? liveActivity : historicalActivity;
  const isLiveActivityForThisBubble = isLastMessage && isOverallLoading;

  return (
    <div className="relative w-full flex flex-col break-word">
      {activityForThisBubble && activityForThisBubble.length > 0 && (
        <div className="mb-3 border-b border-border pb-3 text-xs text-muted-foreground">
          <ActivityTimeline
            processedEvents={activityForThisBubble}
            isLoading={isLiveActivityForThisBubble}
          />
        </div>
      )}
      <div className="text-foreground px-4 pt-3">
        <ReactMarkdown components={mdComponents}>
          {typeof message.content === "string"
            ? message.content
            : JSON.stringify(message.content)}
        </ReactMarkdown>
      </div>
      <div className="flex justify-between items-start gap-2 mt-2">
        {citations && Object.keys(citations).length > 0 && (
            <Button
              variant="secondary"
              className="cursor-pointer"
              onClick={() => setShowSources(!showSources)}
            >
              {showSources ? "Hide" : "Show"} Sources
              <Library className="ml-2 h-4 w-4" />
            </Button>
        )}
        <Button
          variant="secondary"
          className={`cursor-pointer ${
            (isLastMessage && isOverallLoading) || String(message.content).length === 0
              ? 'hidden'
              : 'visible'
          }`}
          onClick={() =>
            handleCopy(
              typeof message.content === "string"
                ? message.content
                : JSON.stringify(message.content),
              message.id!
            )
          }
        >
          {copiedMessageId === message.id ? "Copied" : "Copy"}
          {copiedMessageId === message.id ? <CopyCheck /> : <Copy />}
        </Button>
      </div>
      {showSources && citations && Object.keys(citations).length > 0 && (
        <div className="mt-2 p-2 text-sm w-full">
            <ul>
                {Object.values(citations).map((source) => (
                <li key={source.id} className="mb-2">
                    <a
                    href={source.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                    >
                    {source.id}. {source.label}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      )}
    </div>
  );
};

interface ErrorMessageBubbleProps {
  message: string;
  mdComponents: typeof mdComponents;
}

const ErrorMessageBubble: React.FC<ErrorMessageBubbleProps> = ({
  message,
  mdComponents,
}) => {
  return (
    <div
      className="text-white rounded-xl break-word min-h-7 bg-red-900 max-w-[100%] sm:max-w-[90%] px-4 py-3 rounded-bl-none"
    >
      <ReactMarkdown components={mdComponents}>
        {`**Error:** ${message}`}
      </ReactMarkdown>
    </div>
  );
};

interface ChatMessagesViewProps {
  messages: Message[];
  isLoading: boolean;
  scrollAreaRef: React.RefObject<HTMLDivElement | null>;
  onSubmit: (
    inputValue: string,
    max_research_loops: number,
    query_generator_model: string,
    reflection_model: string,
    answer_model: string
  ) => void;
  onCancel: () => void;
  liveActivityEvents: ProcessedEvent[];
  historicalActivities: Record<string, ProcessedEvent[]>;
  error: string | null;
  settings: {
    maxResearchLoops: number;
    queryGeneratorModel: string;
    reflectionModel: string;
    answerModel: string;
  };
  onSettingsChange: (s: {
    maxResearchLoops: number;
    queryGeneratorModel: string;
    reflectionModel: string;
    answerModel: string;
  }) => void;
}

export function ChatMessagesView({
  messages,
  isLoading,
  scrollAreaRef,
  onSubmit,
  onCancel,
  liveActivityEvents,
  historicalActivities,
  error,
  settings,
  onSettingsChange,
}: ChatMessagesViewProps) {
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  const handleCopy = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };
  return (
    <div className="flex flex-col min-h-[70vh]">
      <ScrollArea className="flex-1 overflow-y-auto" ref={scrollAreaRef}>
        <div className="p-4 md:p-6 space-y-2 w-full pt-16 pb-6">
          {messages.map((message, index) => {
            const isLast = index === messages.length - 1;
            return (
              <div key={message.id || `msg-${index}`} className="space-y-3">
                <div
                  className={`flex items-start gap-3 ${
                    message.type === "human" ? "justify-end" : ""
                  }`}
                >
                  {message.type === "human" ? (
                    <HumanMessageBubble
                      message={message}
                      mdComponents={mdComponents}
                    />
                  ) : (
                    <AiMessageBubble
                      message={message}
                      historicalActivity={historicalActivities[message.id!]}
                      liveActivity={liveActivityEvents}
                      isLastMessage={isLast}
                      isOverallLoading={isLoading}
                      mdComponents={mdComponents}
                      handleCopy={handleCopy}
                      copiedMessageId={copiedMessageId}
                    />
                  )}
                </div>
              </div>
            );
          })}
          {error && (
            <div className="space-y-3">
                <div
                  className={`flex items-start gap-3 justify-start`}>
                    <ErrorMessageBubble message={error} mdComponents={mdComponents} />
                </div>
            </div>
          )}
          {isLoading &&
            (messages.length === 0 ||
              messages[messages.length - 1].type === "human") && (
              <div className="flex items-start gap-3 mt-3">
                <div className="relative group w-full p-3 shadow-sm break-words text-foreground min-h-[56px]">
                  {liveActivityEvents.length > 0 ? (
                    <div className="text-xs">
                      <ActivityTimeline
                        processedEvents={liveActivityEvents}
                        isLoading={true}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-start h-full">
                      <div className="bg-card p-3 rounded-lg">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground mr-2" />
                        <span>Processing...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>
      </ScrollArea>
      <div className="mt-auto">
        <InputForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          onCancel={onCancel}
          hasHistory={messages.length > 0}
          settings={settings}
          onSettingsChange={onSettingsChange}
        />
      </div>
    </div>
  );
}
