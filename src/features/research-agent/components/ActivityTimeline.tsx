import { ScrollArea } from "@/components/ui/scroll-area";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";
import {
  Loader2,
  Activity,
  Info,
  Search,
  TextSearch,
  Brain,
  Pen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export interface ProcessedEvent {
  title: string;
  data: any;
}

interface ActivityTimelineProps {
  processedEvents: ProcessedEvent[];
  isLoading: boolean;
}

export function ActivityTimeline({
  processedEvents,
  isLoading,
}: ActivityTimelineProps) {
  const [isTimelineCollapsed, setIsTimelineCollapsed] =
    useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const getEventIcon = (title: string, index: number) => {
    if (index === 0 && isLoading && processedEvents.length === 0) {
      return <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />;
    }
    if (title.toLowerCase().includes("generating")) {
      return <TextSearch className="h-4 w-4 text-muted-foreground" />;
    } else if (title.toLowerCase().includes("thinking")) {
      return <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />;
    } else if (title.toLowerCase().includes("reflection")) {
      return <Brain className="h-4 w-4 text-muted-foreground" />;
    } else if (title.toLowerCase().includes("research")) {
      return <Search className="h-4 w-4 text-muted-foreground" />;
    } else if (title.toLowerCase().includes("finalizing")) {
      return <Pen className="h-4 w-4 text-muted-foreground" />;
    }
    return <Activity className="h-4 w-4 text-muted-foreground" />;
  };

  useEffect(() => {
    if (!isLoading && processedEvents.length !== 0) {
      setIsTimelineCollapsed(true);
    }
  }, [isLoading, processedEvents]);

  // When a new run starts (isLoading becomes true), expand the timeline so it shows immediately
  useEffect(() => {
    if (isLoading) {
      setIsTimelineCollapsed(false);
    }
  }, [isLoading]);

  return (
    <MagicCard
      className="rounded-lg"
      gradientColor={resolvedTheme === 'dark' ? '#262626' : '#D9D9D955'}
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-start text-sm w-full cursor-pointer gap-2 text-foreground"
            onClick={() => setIsTimelineCollapsed(!isTimelineCollapsed)}
          >
            Research
            {isTimelineCollapsed ? (
              <ChevronDown className="h-4 w-4 mr-2" />
            ) : (
              <ChevronUp className="h-4 w-4 mr-2" />
            )}
          </div>
        </div>
      </div>
      {!isTimelineCollapsed && (
        <ScrollArea className="max-h-96 overflow-y-auto">
          <div className="px-4 pb-4">
            {isLoading && processedEvents.length === 0 && (
              <div className="relative pl-8 pb-4">
                <div className="absolute left-3 top-3.5 h-full w-0.5 bg-input" />
                <div className="absolute left-0.5 top-2 h-5 w-5 rounded-full bg-input flex items-center justify-center">
                  <Loader2 className="h-3 w-3 text-muted-foreground animate-spin" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Searching...
                  </p>
                </div>
              </div>
            )}
            {processedEvents.length > 0 ? (
              <div className="space-y-0">
                {processedEvents.map((eventItem, index) => (
                  <div key={index} className="relative pl-8 pb-4">
                    {index < processedEvents.length - 1 ||
                    (isLoading && index === processedEvents.length - 1) ? (
                      <div className="absolute left-3 top-3.5 h-full w-0.5 bg-input" />
                    ) : null}
                    <div className="absolute left-0.5 top-2 h-6 w-6 rounded-full bg-input flex items-center justify-center">
                      {getEventIcon(eventItem.title, index)}
                    </div>
                    <div>
                      <p className="text-sm text-foreground font-medium mb-0.5">
                        {eventItem.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {typeof eventItem.data === "string"
                          ? eventItem.data
                          : Array.isArray(eventItem.data)
                          ? (eventItem.data as string[]).join(", ")
                          : JSON.stringify(eventItem.data)}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && processedEvents.length > 0 && (
                  <div className="relative pl-8 pb-4">
                    <div className="absolute left-0.5 top-2 h-5 w-5 rounded-full bg-input flex items-center justify-center">
                      <Loader2 className="h-3 w-3 text-muted-foreground animate-spin" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Searching...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : !isLoading ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground pt-10">
                <Info className="h-6 w-6 mb-3" />
                <p className="text-sm">No activity to display.</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Timeline will update during processing.
                </p>
              </div>
            ) : null}
          </div>
        </ScrollArea>
      )}
    </MagicCard>
  );
}
