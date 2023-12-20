import {
  RefObject,
  ReactNode,
  createContext,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { SESSION } from "@/constants";

interface ChatbotContextValues {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  chatbotRef?: RefObject<HTMLDivElement>;
  conversationId?: number;
  storeConversationId: (id: number) => void;
  unread: boolean;
  setUnread: Dispatch<SetStateAction<boolean>>;
  validRecaptcha: boolean;
  setValidRecaptcha: Dispatch<SetStateAction<boolean>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const initialValues: ChatbotContextValues = {
  open: false,
  openChat: () => null,
  closeChat: () => null,
  storeConversationId: () => null,
  unread: false,
  setUnread: () => null,
  validRecaptcha: false,
  setValidRecaptcha: () => null,
  token: "",
  setToken: () => null,
};

export const ChatbotContext =
  createContext<ChatbotContextValues>(initialValues);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(initialValues.open);
  const [conversationId, setConversationId] = useState<number>();
  const [unread, setUnread] = useState<boolean>(initialValues.unread);
  const [validRecaptcha, setValidRecaptcha] = useState<boolean>(initialValues.validRecaptcha);
  const [token, setToken] = useState<string>(initialValues.token);

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
        unread,
        setUnread,
        validRecaptcha,
        setValidRecaptcha,
        token,
        setToken
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
