import { Message } from "@/components/Message";
import { Suggestions } from "@/components/Suggestions";
import { PICK_SUGGESTION_COPY, SUGGESTIONS } from "@/constants";
import { Message as MessageType } from "@/types";

type ConversationStarterProps = {
  welcomeMessage: MessageType;
  hasError?: boolean;
  onPickSuggestion: (suggestion: string) => void;
};

export const ConversationStarter = ({
  welcomeMessage,
  hasError,
  onPickSuggestion
}: ConversationStarterProps) => {
  const composedWelcomeMessage = hasError
    ? welcomeMessage
    : {
        ...welcomeMessage,
        content: [welcomeMessage?.content, PICK_SUGGESTION_COPY]
      };

  return (
    <>
      <Message data={composedWelcomeMessage} />
      {!hasError && (
        <Suggestions
          suggestions={SUGGESTIONS}
          onPickSuggestion={onPickSuggestion}
        />
      )}
    </>
  );
};
