import { useContext, useEffect } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";
import { useChat } from "@/hooks/useChat";

type ChatbotProps = {
  setFrameSize: () => void;
};

export const Chatbot = ({ setFrameSize }: ChatbotProps) => {
  const { open } = useContext(ChatbotContext);
  const { createChat, welcomeMessage, messages } = useChat();

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
