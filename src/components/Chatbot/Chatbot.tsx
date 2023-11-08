import { Ref, useEffect } from "react";

import { OpenChatButton } from "@/components/OpenChatButton";
import { Chat } from "@/components/Chat";

type ChatbotProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setFrameSize: () => void;
  chatbotRef: Ref<HTMLDivElement>;
};

export const Chatbot = ({
  open,
  setOpen,
  setFrameSize,
  chatbotRef,
}: ChatbotProps) => {
  useEffect(() => {
    setFrameSize();
  }, [setFrameSize, open]);

  return open ? (
    <Chat chatbotRef={chatbotRef} minimizeChat={() => setOpen(false)} />
  ) : (
    <OpenChatButton chatbotRef={chatbotRef} openChat={() => setOpen(true)} />
  );
};
