import { useCallback, useContext, useState } from "react";

import { ERRORS } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useCreateConversation, useGetAgent, useGetMessages } from "@/queries";
import { setApiKey } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";

export const useChat = () => {
  const { conversationId, storeConversationId } = useContext(ChatbotContext);

  const [welcomeMessage, setWelcomeMessage] = useState<Message>();

  const { agent, error } = useGetAgent();
  const { messages } = useGetMessages(conversationId, agent?.id);

  const { mutate: createConversation } = useCreateConversation({
    onSuccess: ({ conversation }) => {
      storeConversationId(conversation.id);
    },
    onError: (error: Error) => {
      setWelcomeMessage(createMessage(error.message));
    },
  });

  const createChat = useCallback(async () => {
    if (error) {
      setWelcomeMessage(createMessage(ERRORS.GET_MESSAGE));
    }

    if (agent) {
      setWelcomeMessage(createMessage(agent.welcomeMessage));
      setApiKey(agent.apiKey);
      createConversation(agent?.id);
    }
  }, [agent, error, createConversation]);

  return { createChat, messages, welcomeMessage };
};
