import { useContext, useEffect, useState } from "react";

import { ChatbotContext } from "@/context/ChatbotContext";
import { MessageRoles, WelcomeMessage } from "@/types";
import { useGetAgent } from "@/queries";
import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";

type ChatbotProps = {
  setFrameSize: () => void;
};

export const Chatbot = ({ setFrameSize }: ChatbotProps) => {
  const [welcomeMessage, setWelcomeMessage] = useState<WelcomeMessage>();

  const { open } = useContext(ChatbotContext);

  const { agent } = useGetAgent();

  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  useEffect(() => {
    if (agent) {
      setWelcomeMessage({
        content: agent.welcomeMessage,
        role: MessageRoles.ASSISTANT,
        createdAt: new Date(),
      });
    }
  }, [agent]);

  return open ? <Chat welcomeMessage={welcomeMessage} /> : <OpenChatButton />;
};
