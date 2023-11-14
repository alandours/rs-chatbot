import {
  RefObject,
  ReactNode,
  createContext,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ChatbotContextValues {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  chatbotRef?: RefObject<HTMLDivElement>;
  conversationId: number | null;
  setConversationId: Dispatch<SetStateAction<number | null>>;
}

const initialValues: ChatbotContextValues = {
  open: false,
  openChat: () => null,
  closeChat: () => null,
  conversationId: null,
  setConversationId: () => null,
};

export const ChatbotContext =
  createContext<ChatbotContextValues>(initialValues);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(initialValues.open);
  const [conversationId, setConversationId] = useState<number | null>(
    initialValues.conversationId
  );

  const chatbotRef = useRef<HTMLDivElement>(null);

  return (
    <ChatbotContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
        chatbotRef,
        conversationId,
        setConversationId,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
