import { createGlobalStyle } from "styled-components";

import PoppinsRegular from "@/assets/fonts/Poppins/Poppins-Regular.ttf";
import PoppinsMedium from "@/assets/fonts/Poppins/Poppins-Medium.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow: hidden;
  }
`;
