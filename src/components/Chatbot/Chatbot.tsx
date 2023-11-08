import { useContext, useEffect } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";

type ChatbotProps = {
  setFrameSize: () => void;
};

export const Chatbot = ({ setFrameSize }: ChatbotProps) => {
  const { open } = useContext(ChatbotContext);

  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  return open ? <Chat /> : <OpenChatButton />;
};
