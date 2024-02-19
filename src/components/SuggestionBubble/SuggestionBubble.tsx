import { useState } from "react";
import * as styles from "./styles";

type SuggestionBubbleProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const SuggestionBubble = ({
  onClick,
  children,
}: SuggestionBubbleProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <styles.SuggestionBubbleContainer
      $isHovering={isHovering}
      onClick={onClick}
      onMouseLeave={() => setIsHovering(false)}
      onMouseEnter={() => setIsHovering(true)}
    >
      <styles.SuggestionBubbleLabel>{children}</styles.SuggestionBubbleLabel>
      <styles.SuggestionBubbleHover $isHovering={isHovering} />
    </styles.SuggestionBubbleContainer>
  );
};
