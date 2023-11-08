import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChatbotProvider } from "@/context/ChatbotContext.tsx";

import App from "./App.tsx";

const root = document.createElement("div");
root.setAttribute("id", "root");

ReactDOM.createRoot(document.body.appendChild(root)!).render(
  <React.StrictMode>
    <ChatbotProvider>
      <App />
    </ChatbotProvider>
  </React.StrictMode>
);
