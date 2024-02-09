import {
  RefObject,
  ReactNode,
  createContext,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { setSessionSessionToken, setSessionAgentWelcomeMessage, getSessionAgentWelcomeMessage } from "@/utils/session";

interface ChatbotContextValues {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  chatbotRef?: RefObject<HTMLDivElement>;
  sessionToken: string;
  setSessionToken: Dispatch<SetStateAction<string>>;
  storeSessionToken: (token: string) => void;
  validRecaptcha: boolean;
  setValidRecaptcha: Dispatch<SetStateAction<boolean>>;
  captchaToken: string;
  setCaptchaToken: Dispatch<SetStateAction<string>>;
  agentWelcomeMessage?: string;
  storeAgentWelcomeMessage: (message: string) => void;
  restoreSession: (sessionSessionToken: string) => void;
}

const initialValues: ChatbotContextValues = {
  open: false,
  openChat: () => null,
  closeChat: () => null,
  sessionToken: "",
  setSessionToken: () => null,
  storeSessionToken: () => null,
  validRecaptcha: false,
  setValidRecaptcha: () => null,
  captchaToken: "",
  setCaptchaToken: () => null,
  storeAgentWelcomeMessage: () => null,
  restoreSession: () => null,
};

export const ChatbotContext =
  createContext<ChatbotContextValues>(initialValues);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(initialValues.open);
  const [agentWelcomeMessage, setAgentWelcomeMessage] = useState<string>();
  const [validRecaptcha, setValidRecaptcha] = useState<boolean>(
    initialValues.validRecaptcha
  );
  const [captchaToken, setCaptchaToken] = useState<string>(initialValues.captchaToken);

  const [sessionToken, setSessionToken] = useState<string>(initialValues.sessionToken);

  const chatbotRef = useRef<HTMLDivElement>(null);

  const storeSessionToken = (token: string) => {
    setSessionToken(token);
    setSessionSessionToken(token);
  };

  const storeAgentWelcomeMessage = (message: string) => {
    setAgentWelcomeMessage(message);
    setSessionAgentWelcomeMessage(message);
  }

  const restoreSession = (sessionSessionToken: string) => {
    const sessionAgentWelcomeMessage = getSessionAgentWelcomeMessage();
    
    setSessionToken(sessionSessionToken);
    setAgentWelcomeMessage(sessionAgentWelcomeMessage || "");
  }

  return (
    <ChatbotContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
        chatbotRef,
        sessionToken,
        setSessionToken,
        storeSessionToken,
        validRecaptcha,
        setValidRecaptcha,
        captchaToken,
        setCaptchaToken,
        agentWelcomeMessage,
        storeAgentWelcomeMessage,
        restoreSession,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
