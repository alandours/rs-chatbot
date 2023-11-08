import { RefObject, ReactNode, createContext, useRef, useState } from "react";

interface ChatbotContextValues {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  chatbotRef?: RefObject<HTMLDivElement>;
}

const initialValues: ChatbotContextValues = {
  open: false,
  openChat: () => null,
  closeChat: () => null,
};

export const ChatbotContext =
  createContext<ChatbotContextValues>(initialValues);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(initialValues.open);

  const chatbotRef = useRef<HTMLDivElement>(null);

  return (
    <ChatbotContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
        chatbotRef,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
