import { SuggestionBubble } from "@/components/SuggestionBubble";

import * as styles from "./styles";

const suggestions = [
  {
    label: "🚀 Build a Product",
    message: "I want to build a product. Can you help me?",
  },
  {
    label: "🤖 AI / ML",
    message: "Can you tell me about your AI/ML capabilities?",
  },
  {
    label: "💻 Development",
    message: "Tell me more about your development capabilities",
  },
  {
    label: "📱 Product Design & Strategy",
    message: "Can Rootstrap help me with product design and strategy?",
  },
];

type SuggestionsProps = {
  onPickSuggestion: (suggestion: string) => void;
};

export const Suggestions = ({ onPickSuggestion }: SuggestionsProps) => {
  return (
    <styles.SuggestionsContainer>
      {suggestions.map((suggestion, index) => (
        <SuggestionBubble
          key={index}
          onClick={() => onPickSuggestion(suggestion.message)}
        >
          {suggestion.label}
        </SuggestionBubble>
      ))}
    </styles.SuggestionsContainer>
  );
};
