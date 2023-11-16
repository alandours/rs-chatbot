import { RefObject, ReactNode, createContext, useRef, useState } from "react";

import { SESSION } from "@/constants";

interface ChatbotContextValues {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  chatbotRef?: RefObject<HTMLDivElement>;
  conversationId?: number;
  storeConversationId: (id: number) => void;
}

const initialValues: ChatbotContextValues = {
  open: false,
  openChat: () => null,
  closeChat: () => null,
  storeConversationId: () => null,
};

export const ChatbotContext =
  createContext<ChatbotContextValues>(initialValues);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(initialValues.open);
  const [conversationId, setConversationId] = useState<number>();

  const chatbotRef = useRef<HTMLDivElement>(null);

  const storeConversationId = (id: number) => {
    setConversationId(id);
    sessionStorage.setItem(SESSION.CONVERSATION_ID, JSON.stringify(id));
  };

  return (
    <ChatbotContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
        chatbotRef,
        conversationId,
        storeConversationId,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
