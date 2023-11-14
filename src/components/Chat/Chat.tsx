import { FormEvent, useContext, useEffect, useRef } from "react";

import { Message } from "@/components/Message";
import { TypingLoader } from "@/components/TypingLoader";
import { CHATBOT_NAME } from "@/constants";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useSendMessage } from "@/queries";
import { MessageRoles, Message as MessageType } from "@/types";
import { createMessage } from "@/utils";

import minimizeIcon from "@/assets/minimize.webp";
import sendIcon from "@/assets/send.webp";

import * as styles from "./styles";

type ChatProps = {
  welcomeMessage?: MessageType;
  messages: MessageType[];
};

export const Chat = ({ welcomeMessage, messages }: ChatProps) => {
  const { chatbotRef, closeChat, conversationId } = useContext(ChatbotContext);

  const { isLoading, mutate: sendMessage } = useSendMessage();

  const scrollEndRef = useRef<HTMLDivElement>(null);

  const onSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const content = target.message.value;

    if (conversationId) {
      messages.push(createMessage(content, MessageRoles.USER));
      sendMessage({ conversationId, content });
      target.reset();
    }
  };

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [isLoading, messages]);

  return (
    <styles.Chatbot ref={chatbotRef}>
      <styles.Header>
        <styles.TitleWrapper>
          <styles.Status />
          <styles.Title>{CHATBOT_NAME}</styles.Title>
        </styles.TitleWrapper>
        <styles.MinimizeButton onClick={closeChat}>
          <styles.MinimizeIcon src={minimizeIcon} alt="Minimize chat" />
        </styles.MinimizeButton>
      </styles.Header>
      <styles.Main>
        {welcomeMessage && <Message data={welcomeMessage} />}
        {messages.map((data) => (
          <Message data={data} key={data.id} />
        ))}
        {isLoading && <TypingLoader />}
        <div ref={scrollEndRef} />
      </styles.Main>
      <styles.Footer onSubmit={onSendMessage}>
        <styles.Input
          name="message"
          type="text"
          placeholder="Send a message..."
        />
        <styles.Button type="submit" disabled={isLoading}>
          <styles.SendIcon src={sendIcon} alt="Send message" />
        </styles.Button>
      </styles.Footer>
    </styles.Chatbot>
  );
};
