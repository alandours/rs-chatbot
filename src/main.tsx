import React from "react";
import ReactDOM from "react-dom/client";

import { ChatbotProvider } from "@/context/ChatbotContext.tsx";

import App from "./App.tsx";

import { createDOMElements } from "./utils/createDOMElements.ts";

createDOMElements();

ReactDOM.createRoot(document.querySelector("#rs-chatbot-root")!).render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>
);
