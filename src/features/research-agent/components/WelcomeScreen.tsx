import { InputForm } from "@/features/research-agent/components/InputForm";

interface WelcomeScreenProps {
  handleSubmit: (
    submittedInputValue: string,
    max_research_loops: number,
    query_generator_model: string,
    reflection_model: string,
    answer_model: string
  ) => void;
  onCancel: () => void;
  isLoading: boolean;
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

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  handleSubmit,
  onCancel,
  isLoading,
  settings,
  onSettingsChange,
}) => (
  <div className="min-h-[70vh] flex flex-col text-center px-4 w-full max-w-7xl mx-auto">
    <div className="w-full mt-auto">
      <InputForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onCancel={onCancel}
        hasHistory={false}
        settings={settings}
        onSettingsChange={onSettingsChange}
      />
      <p className="text-xs text-muted-foreground mt-2">
        Powered by Google Gemini and LangChain LangGraph.
      </p>
    </div>
  </div>
);
