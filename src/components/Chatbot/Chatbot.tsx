import { Ref, useEffect, useState } from "react";

import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";

type ChatbotProps = {
  setFrameSize: () => void;
  chatbotRef: Ref<HTMLDivElement>;
};

export const Chatbot = ({ setFrameSize, chatbotRef }: ChatbotProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  return open ? (
    <Chat chatbotRef={chatbotRef} minimizeChat={() => setOpen(false)} />
  ) : (
    <OpenChatButton chatbotRef={chatbotRef} openChat={() => setOpen(true)} />
  );
};
