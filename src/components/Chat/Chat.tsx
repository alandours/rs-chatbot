import { FormEvent, useContext, useEffect, useRef } from "react";

import { Message } from "@/components/Message";
import { TypingLoader } from "@/components/TypingLoader";
import { CONFIG } from "@/constants/config";
import { MessageRoles } from "@/constants/enums";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useSendMessage } from "@/queries";
import { Message as MessageType } from "@/types";
import { createMessage } from "@/utils";
import { handlePendingResponse, removePendingResponse } from "@/utils/session";

import minimizeIcon from "@/assets/minimize.webp";
import sendIcon from "@/assets/send.webp";

import * as styles from "./styles";

type ChatProps = {
  welcomeMessage?: MessageType;
  messages: MessageType[];
};

export const Chat = ({ welcomeMessage, messages }: ChatProps) => {
  const { chatbotRef, closeChat, conversationId, validRecaptcha } =
    useContext(ChatbotContext);

  const { isLoading: isSendingMessage, mutate: sendMessage } = useSendMessage({
    onError: (error: Error) => {
      removePendingResponse();

      const lastMessage = messages.pop()!;
      messages.push({ ...lastMessage, errorMessage: error.message });
    },
  });

  const scrollEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const onSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validRecaptcha) return;

    const target = e.target as HTMLFormElement;
    const content = target.message.value;

    if (conversationId && content) {
      messages.push(createMessage(content, MessageRoles.USER));
      sendMessage({ conversationId, content });
      target.reset();
    }
  };

  const handleScroll = (e: WheelEvent) => {
    const scrollArea = scrollAreaRef?.current;

    if (!scrollArea) return;

    if (e.deltaY <= 0 && scrollArea?.scrollTop <= 0) {
      e.preventDefault();
    }

    if (
      e.deltaY > 0 &&
      scrollArea?.scrollTop + scrollArea?.clientHeight >=
        scrollArea?.scrollHeight
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const scrollArea = scrollAreaRef?.current;

    scrollArea?.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      scrollArea?.removeEventListener("wheel", handleScroll);
    };
  }, [scrollAreaRef]);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      scrollEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);

    return () => clearInterval(scrollTimeout);
  }, [isSendingMessage, messages]);

  useEffect(() => {
    handlePendingResponse(isSendingMessage, messages);
  }, [isSendingMessage, messages]);

  const isDisabled = isSendingMessage || !conversationId || !validRecaptcha;

  return (
    <styles.Chatbot ref={chatbotRef}>
      <styles.Header>
        <styles.TitleWrapper>
          <styles.Status />
          <styles.Title>{CONFIG.CHATBOT_NAME}</styles.Title>
          <styles.TitleLabel>Beta</styles.TitleLabel>
        </styles.TitleWrapper>
        <styles.MinimizeButton onClick={closeChat}>
          <styles.MinimizeIcon src={minimizeIcon} alt="Minimize chat" />
        </styles.MinimizeButton>
      </styles.Header>
      <styles.Main ref={scrollAreaRef}>
        {welcomeMessage && <Message data={welcomeMessage} />}
        {messages.map((data) => (
          <Message data={data} key={data.id} />
        ))}
        {isSendingMessage && <TypingLoader />}
        {messages && <div ref={scrollEndRef} />}
      </styles.Main>
      <styles.DisclaimerWrapper>
        <styles.Disclaimer>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </a>{" "}
          apply.
        </styles.Disclaimer>
      </styles.DisclaimerWrapper>
      <styles.Footer onSubmit={onSendMessage}>
        <styles.Input
          name="message"
          type="text"
          placeholder="Send a message..."
        />
        <styles.Button type="submit" disabled={isDisabled}>
          <styles.SendIcon src={sendIcon} alt="Send message" />
        </styles.Button>
      </styles.Footer>
    </styles.Chatbot>
  );
};
