import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChatbotProvider } from "@/context/ChatbotContext.tsx";

import App from "./App.tsx";

const chatbotWrapper = document.createElement("div");
chatbotWrapper.setAttribute("id", "rs-chatbot-wrapper");

const root = document.createElement("div");
root.setAttribute("id", "rs-chatbot-root");

const chatbotRecaptcha = document.createElement("div");
chatbotRecaptcha.setAttribute("id", "rs-chatbot-recaptcha");

chatbotWrapper.appendChild(root);
chatbotWrapper.appendChild(chatbotRecaptcha);

document.body.appendChild(chatbotWrapper);

ReactDOM.createRoot(document.querySelector("#rs-chatbot-root")!).render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>
);
