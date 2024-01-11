import { useCallback, useContext, useEffect, useState } from "react";

import { ERRORS, SESSION } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useCreateConversation, useGetAgent, useGetMessages, useCreateRecaptcha } from "@/queries";
import { setApiKey } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";

export const useChat = () => {
  const { conversationId, storeConversationId, open, setUnread, setValidRecaptcha, token } =
    useContext(ChatbotContext);

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

  const { mutate: verifyRecaptcha } = useCreateRecaptcha({
    onSuccess: ({ success }) => {
      setValidRecaptcha(success);

      if (!success) {
        setWelcomeMessage(createMessage(ERRORS.RECAPTCHA_VERIFICATION));
      }
    },
    onError: (error: Error) => {
      setWelcomeMessage(createMessage(error.message));
    },
  });

  useEffect(() => {
    if (token && conversationId) {
      verifyRecaptcha({ token: token, conversationId: conversationId });
    }
  }, [token, conversationId, verifyRecaptcha]);

  const createChat = useCallback(async () => {
    if (error) {
      setWelcomeMessage(createMessage(ERRORS.GET_MESSAGE));
    }

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
  }, [agent, error, createConversation, storeConversationId]);

  useEffect(() => {
    setUnread(true);
  }, [messages, setUnread]);

  useEffect(() => {
    setUnread(false);
  }, [open, setUnread]);

  return { createChat, messages, welcomeMessage };
};
