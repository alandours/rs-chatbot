import * as styles from "./styles";

type SuggestionBubbleProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const SuggestionBubble = ({
  onClick,
  children,
}: SuggestionBubbleProps) => (
  <styles.SuggestionBubbleContainer onClick={onClick}>
    {children}
  </styles.SuggestionBubbleContainer>
);
