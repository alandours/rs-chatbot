import styled from "styled-components";
import ReactFrame from "react-frame-component";

import { BREAKPOINTS } from "@/constants";
import { COLORS } from "@/constants/colors";

type FrameProps = {
  open: boolean;
};

export const Frame = styled(ReactFrame)<FrameProps>`
  border: 0;
  border-radius: 100%;
  box-shadow: 8px 8px 48px 0px ${COLORS.SHADOW};
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 1000;

  ${({ open }) =>
    open &&
    `
      border-radius: 0;
      bottom:  0;
      right: 0;

      @media (min-width: ${BREAKPOINTS.TABLET}px) {
        right: 3rem;
      }
    `}
`;
