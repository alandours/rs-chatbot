import styled from "styled-components";
import ReactFrame from "react-frame-component";

import { COLORS } from "@/constants/colors";

type FrameProps = {
  open: boolean;
};

export const Frame = styled(ReactFrame)<FrameProps>`
  border: 0;
  box-shadow: 8px 8px 48px 0px ${COLORS.SHADOW};
  position: fixed;
  z-index: 1000;

  ${({ open }) =>
    `
      border-radius: ${open ? "0" : "100%"};
      bottom: ${open ? "0" : "3rem"};
      right: ${open ? "4rem" : "3rem"};
    `}
`;
