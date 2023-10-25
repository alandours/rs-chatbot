import { FrameContextConsumer } from "react-frame-component";
import { StyleSheetManager } from "styled-components";

import { Frame } from "./styles";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Frame>
      <FrameContextConsumer>
        {({ document }) => (
          <StyleSheetManager target={document?.head}>
            <GlobalStyle />
            <h1>Chatbot</h1>
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  );
}

export default App;
