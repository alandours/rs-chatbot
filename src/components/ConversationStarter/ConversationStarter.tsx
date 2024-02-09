import { Message } from "@/components/Message";
import { Suggestions } from "@/components/Suggestions";

import { Message as MessageType } from "@/types";

type ConversationStarterProps = {
  welcomeMessage: MessageType;
  onPickSuggestion: (suggestion: string) => void;
};

const pickSuggestionCopy = "🌟 Excited to assist you! Whether you’re here to learn more about us or have a specific question, I’ve got your back. Here are a few handy options to get you started:";

export const ConversationStarter = ({
  welcomeMessage,
  onPickSuggestion,
}: ConversationStarterProps) => {
  const composedWelcomeMessage = {
    ...welcomeMessage,
    content: [welcomeMessage?.content, pickSuggestionCopy],
  };

  return (
    <>
      <Message data={composedWelcomeMessage} />
      <Suggestions onPickSuggestion={onPickSuggestion} />
    </>
  );
};
