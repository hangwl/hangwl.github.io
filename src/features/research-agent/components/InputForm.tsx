import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Send,
  StopCircle,
  Cpu,
  Repeat,
  Speech,
  Settings,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InputFormProps {
  onSubmit: (
    inputValue: string,
    maxResearchLoops: number,
    queryGeneratorModel: string,
    reflectionModel: string,
    answerModel: string,
  ) => void;
  onCancel: () => void;
  isLoading: boolean;
  hasHistory: boolean;
  settings?: {
    maxResearchLoops: number;
    queryGeneratorModel: string;
    reflectionModel: string;
    answerModel: string;
  };
  onSettingsChange?: (s: {
    maxResearchLoops: number;
    queryGeneratorModel: string;
    reflectionModel: string;
    answerModel: string;
  }) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  onCancel,
  isLoading,
  hasHistory,
  settings,
  onSettingsChange,
}) => {
  const [internalInputValue, setInternalInputValue] = useState("");
  const [maxResearchLoops, setMaxResearchLoops] = useState(
    settings?.maxResearchLoops ?? 2
  );
  const [queryGeneratorModel, setQueryGeneratorModel] = useState(
    settings?.queryGeneratorModel ?? "gemini-2.5-flash-lite"
  );
  const [reflectionModel, setReflectionModel] = useState(
    settings?.reflectionModel ?? "gemini-2.5-flash-lite"
  );
  const [answerModel, setAnswerModel] = useState(
    settings?.answerModel ?? "gemini-2.5-flash"
  );
  const [showSettings, setShowSettings] = useState(false);

  const handleInternalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!internalInputValue.trim()) return;
    onSubmit(
      internalInputValue,
      maxResearchLoops,
      queryGeneratorModel,
      reflectionModel,
      answerModel
    );
    setInternalInputValue("");
  };

  useEffect(() => {
    if (!settings) return;
    setMaxResearchLoops(settings.maxResearchLoops);
    setQueryGeneratorModel(settings.queryGeneratorModel);
    setReflectionModel(settings.reflectionModel);
    setAnswerModel(settings.answerModel);
  }, [settings?.maxResearchLoops, settings?.queryGeneratorModel, settings?.reflectionModel, settings?.answerModel]);

  const emitSettings = (patch: Partial<NonNullable<InputFormProps["settings"]>>) => {
    if (!onSettingsChange) return;
    onSettingsChange({
      maxResearchLoops,
      queryGeneratorModel,
      reflectionModel,
      answerModel,
      ...patch,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleInternalSubmit();
    }
  };

  const isSubmitDisabled = !internalInputValue.trim() || isLoading;

  return (
    <form
      onSubmit={handleInternalSubmit}
      className={`flex flex-col gap-2 p-3 pb-4`}
    >
      <div
        className={`flex flex-row items-center justify-between rounded-2xl ${
          hasHistory ? "rounded-br-sm" : ""
        } break-words min-h-7 border px-4 py-3`}
      >
        <Textarea
          value={internalInputValue}
          onChange={(e) => setInternalInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tell me about the apprenticeship program in AI Singapore."
          className={`w-full text-foreground placeholder:text-muted-foreground resize-none border-0 focus:outline-none focus:ring-0 outline-none focus-visible:ring-0 shadow-none
                        md:text-base min-h-[56px] max-h-[200px] bg-transparent`}
          rows={1}
        />
        <div>
          {isLoading ? (
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="p-2 cursor-pointer rounded-full transition-all duration-200"
              onClick={onCancel}
            >
              <StopCircle className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="ghost"
              size="lg"
              className="h-12 px-5 cursor-pointer transition-all duration-200 text-base gap-2"
              disabled={isSubmitDisabled}
            >
              Search
              <Send className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      <Button
        type="button"
        variant="ghost"
        className="w-full flex items-center justify-center gap-2 my-2 border border-border cursor-pointer transition-none"
        onClick={() => setShowSettings(!showSettings)}
      >
        <Settings className="h-4 w-4" />
        <span>Settings</span>
      </Button>
      {showSettings && (
        <div className="flex items-start justify-between">
          <div className="flex w-full flex-col items-stretch gap-2 md:flex-row md:items-start">
          {/* Research Process Column */}
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-row items-center justify-between bg-card/40 border text-foreground rounded-xl px-3 py-2">
              <div className="flex flex-row items-center text-sm mr-2">
                <Repeat className="h-4 w-4 mr-2" />
                Research Depth
              </div>
              <Select
                value={maxResearchLoops.toString()}
                onValueChange={(value) => {
                  const v = parseInt(value);
                  setMaxResearchLoops(v);
                  emitSettings({ maxResearchLoops: v });
                }}
              >
                <SelectTrigger className="w-[70px] cursor-pointer">
                  <SelectValue placeholder="Depth" />
                </SelectTrigger>
                <SelectContent className="">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem
                      key={n}
                      value={n.toString()}
                      className="cursor-pointer"
                    >
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row items-center justify-between bg-card/40 border text-foreground rounded-xl px-3 py-2">
              <div className="flex flex-row items-center text-sm mr-2">
                <Cpu className="h-4 w-4 mr-2" />
                Query Model
              </div>
              <Select
                value={queryGeneratorModel}
                onValueChange={(v) => { setQueryGeneratorModel(v); emitSettings({ queryGeneratorModel: v }); }}
              >
                <SelectTrigger className="w-[150px] cursor-pointer">
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem
                    value="gemini-2.5-flash-lite"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash-Lite
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="gemini-2.5-flash"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Model Selection Column */}
          <div className="flex flex-1 flex-col gap-2">

            <div className="flex flex-row items-center justify-between bg-card/40 border text-foreground rounded-xl px-3 py-2">
              <div className="flex flex-row items-center text-sm mr-2">
                <Brain className="h-4 w-4 mr-2" />
                Reflection Model
              </div>
              <Select
                value={reflectionModel}
                onValueChange={(v) => { setReflectionModel(v); emitSettings({ reflectionModel: v }); }}
              >
                <SelectTrigger className="w-[150px] cursor-pointer">
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem
                    value="gemini-2.5-flash-lite"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash-Lite
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="gemini-2.5-flash"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row items-center justify-between bg-card/40 border text-foreground rounded-xl px-3 py-2">
              <div className="flex flex-row items-center text-sm mr-2">
                <Speech className="h-4 w-4 mr-2" />
                Answer Model
              </div>
              <Select value={answerModel} onValueChange={(v) => { setAnswerModel(v); emitSettings({ answerModel: v }); }}>
                <SelectTrigger className="w-[150px] cursor-pointer">
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem
                    value="gemini-2.5-flash-lite"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash-Lite
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="gemini-2.5-flash"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Flash
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="gemini-2.5-pro"
                    className="cursor-pointer"
                  >
                    <div className="flex items-center">
                      Gemini 2.5 Pro
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      )}
    </form>
  );
}
;
