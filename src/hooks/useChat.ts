import { useCallback, useContext, useEffect, useState } from "react";

import { ERRORS } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import {
  useCreateConversation,
  useGetAgent,
  useGetMessages,
  useCreateRecaptcha,
} from "@/queries";
import { setApiKey } from "@/services/client";
import { Message } from "@/types";
import { createMessage } from "@/utils";
import { getSessionConversationId } from "@/utils/session";

export const useChat = () => {
  const { conversationId, storeConversationId, setValidRecaptcha, token } =
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

      const sessionConversationId = getSessionConversationId();

      if (!sessionConversationId) {
        createConversation(agent?.id);
      } else {
        storeConversationId(Number(sessionConversationId));
      }
    }
  }, [agent, error, createConversation, storeConversationId]);

  return { createChat, messages, welcomeMessage };
};
