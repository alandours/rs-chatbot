import styled from "styled-components";
import ReactFrame from "react-frame-component";

import { BREAKPOINTS } from "@/constants";
import { COLORS } from "@/constants/colors";

type FrameProps = {
  open: boolean;
};

export const Frame = styled(ReactFrame)<FrameProps>`
  border: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    bottom: 1rem;
    right: 2rem;
  }

  ${({ open }) =>
    open &&
    `
      border-radius: 0;
      box-shadow: 8px 8px 48px 0px ${COLORS.SHADOW};

      @media (min-width: ${BREAKPOINTS.TABLET}px) {
        bottom: 0;
        right: 3rem;
      }
    `}
`;
