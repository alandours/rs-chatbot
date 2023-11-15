import { useCallback, useContext, useEffect, useState } from "react";

import { SESSION } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useCreateConversation, useGetAgent, useGetMessages } from "@/queries";
import { setApiKey } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";

export const useChat = () => {
  const { conversationId, storeConversationId, open, setUnread } =
    useContext(ChatbotContext);

  const [welcomeMessage, setWelcomeMessage] = useState<Message>();

  const { agent } = useGetAgent();
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
    if (agent) {
      setWelcomeMessage(createMessage(agent.welcomeMessage));

      setApiKey(agent.apiKey);

      const sessionData = sessionStorage.getItem(SESSION.CONVERSATION_ID);
      const sessionId = sessionData && JSON.parse(sessionData);

      if (!sessionId) {
        createConversation(agent?.id);
      } else {
        storeConversationId(Number(sessionId));
      }
    }
  }, [agent, createConversation, storeConversationId]);

  useEffect(() => {
    setUnread(true);
  }, [messages, setUnread]);

  useEffect(() => {
    if (open) {
      setUnread(false);
    }
  }, [open, setUnread]);

  return { createChat, messages, welcomeMessage };
};
