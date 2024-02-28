import { useCallback, useContext, useEffect } from "react";
import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";
import { QueryClientProvider } from "react-query";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import { BREAKPOINTS } from "@/constants";
import { CONFIG } from "@/constants/config";
import { ChatbotContext } from "@/context/ChatbotContext";
import { useFrameSize } from "@/hooks/useFrameSize";
import { queryClient } from "@/queries/queryClient";
import { Chatbot } from "@/components/Chatbot";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  const { open, setCaptchaToken, captchaToken } = useContext(ChatbotContext);
  const { width, height, setFrameSize } = useFrameSize();

  const onVerify = useCallback(
    (googleToken: string) => {
      debugger;
      if (!captchaToken) {
        setCaptchaToken(googleToken);
      }
    },
    [captchaToken, setCaptchaToken]
  );

  useEffect(() => {
    window.addEventListener("resize", setFrameSize);
    return () => window.removeEventListener("resize", setFrameSize);
  }, [setFrameSize]);

  useEffect(() => {
    document.body.style.overflow =
      open && window.innerWidth < BREAKPOINTS.TABLET ? "hidden" : "auto";
  }, [open, width]);

  return (
    <Frame width={width} height={height} open={open}>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <GoogleReCaptchaProvider
              reCaptchaKey={CONFIG.GOOGLE_RECAPTCHA_SITE_KEY}
              container={{
                element: "rs-chatbot-recaptcha",
                parameters: {},
              }}
              scriptProps={{
                async: true,
              }}
            >
              <GoogleReCaptcha onVerify={onVerify} />
              <QueryClientProvider client={queryClient}>
                <Chatbot setFrameSize={setFrameSize} />
              </QueryClientProvider>
            </GoogleReCaptchaProvider>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
