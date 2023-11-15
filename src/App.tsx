import { useContext, useEffect } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";
import { QueryClientProvider } from "react-query";

import { ChatbotContext } from "@/context/ChatbotContext";
import { useFrameSize } from "@/hooks/useFrameSize";
import { queryClient } from "@/queries/queryClient";
import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";
function App() {
  const { open } = useContext(ChatbotContext);
  const { width, height, setFrameSize } = useFrameSize();

  useEffect(() => {
    window.addEventListener("resize", setFrameSize);
    return () => window.removeEventListener("resize", setFrameSize);
  }, [setFrameSize]);

  return (
    <Frame width={width} height={height} open={open}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <Chatbot setFrameSize={setFrameSize} />
            </QueryClientProvider>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
