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
  const { conversationId, storeConversationId, setValidRecaptcha, token, validRecaptcha } =
    useContext(ChatbotContext);

  const [welcomeMessage, setWelcomeMessage] = useState<Message>();

  const { agent, error: agentError } = useGetAgent();
  const { messages } = useGetMessages(conversationId, agent?.id);

  const { mutate: createConversation, isLoading } = useCreateConversation({
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
    if (agentError) {
      setWelcomeMessage(createMessage(ERRORS.GET_MESSAGE));
    }

    if (agent) {
      if (validRecaptcha) {
        setWelcomeMessage(createMessage(agent.welcomeMessage));
      }

      setApiKey(agent.apiKey);

      const sessionConversationId = getSessionConversationId();

      if (!sessionConversationId && !isLoading) {
        createConversation(agent?.id);
      }

      if (sessionConversationId) {
        storeConversationId(Number(sessionConversationId));
      }
    }
  }, [
    agent,
    agentError,
    validRecaptcha,
    isLoading,
    createConversation,
    storeConversationId,
  ]);

  return { createChat, messages, welcomeMessage };
};
