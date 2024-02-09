import { SuggestionBubble } from "@/components/SuggestionBubble";
import { Suggestion as SuggestionType } from "@/types";

import * as styles from "./styles";

type SuggestionsProps = {
  suggestions: SuggestionType[];
  onPickSuggestion: (suggestion: string) => void;
};

export const Suggestions = ({ suggestions, onPickSuggestion }: SuggestionsProps) => {
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
