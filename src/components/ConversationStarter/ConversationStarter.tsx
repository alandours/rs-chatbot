import { Message } from "@/components/Message";
import { Suggestions } from "@/components/Suggestions";
import { PICK_SUGGESTION_COPY, SUGGESTIONS } from "@/constants";
import { Message as MessageType,} from "@/types";


type ConversationStarterProps = {
  welcomeMessage: MessageType;
  onPickSuggestion: (suggestion: string) => void;
};


export const ConversationStarter = ({
  welcomeMessage,
  onPickSuggestion,
}: ConversationStarterProps) => {
  const composedWelcomeMessage = {
    ...welcomeMessage,
    content: [welcomeMessage?.content, PICK_SUGGESTION_COPY],
  };

  return (
    <>
      <Message data={composedWelcomeMessage} />
      <Suggestions suggestions={SUGGESTIONS} onPickSuggestion={onPickSuggestion} />
    </>
  );
};
