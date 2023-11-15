import { useCallback, useContext, useEffect, useState } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";
import { useCreateConversation, useGetAgent, useGetMessages } from "@/queries";
import { setApiKey } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";

type ChatbotProps = {
  setFrameSize: () => void;
};

export const Chatbot = ({ setFrameSize }: ChatbotProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<Message>();

  const { open, conversationId, storeConversationId } =
    useContext(ChatbotContext);

  const { agent } = useGetAgent();
  const { messages } = useGetMessages(conversationId, agent?.id);

  const { mutate: createConversation } = useCreateConversation({
    onSuccess: ({ conversation }) => {
      storeConversationId(conversation.id);
    },
  });

  const createChat = useCallback(async () => {
    if (agent) {
      setWelcomeMessage(createMessage(agent.welcomeMessage));

      setApiKey(agent.apiKey);
      createConversation(agent?.id);
    }
  }, [agent, createConversation]);

  useEffect(() => {
    createChat();
  }, [createChat]);

  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  return open ? (
    <Chat welcomeMessage={welcomeMessage} messages={messages} />
  ) : (
    <OpenChatButton />
  );
};
