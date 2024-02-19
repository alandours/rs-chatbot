import styled from "styled-components";

import { COLORS } from "@/constants/colors";

type StyleProps = {
  $isHovering: boolean;
};

export const SuggestionBubbleContainer = styled.div<StyleProps>`
  border-radius: 10rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ $isHovering }) =>
    $isHovering ? COLORS.YELLOW : COLORS.GREY.LIGHTISH};
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -1%;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
  padding: 1rem 1.5rem;
  position: relative;
`;

export const SuggestionBubbleLabel = styled.div`
  position: relative;
  z-index: 20;
`;

export const SuggestionBubbleHover = styled.div<StyleProps>`
  background-color: ${COLORS.YELLOW};
  bottom: 0%;
  left: 0%;
  opacity: ${({ $isHovering }) => ($isHovering ? 1 : 0)};
  position: absolute;
  right: auto;
  top: 0%;
  transform-style: preserve-3d;
  transform: translate3d(
    ${({ $isHovering }) => ($isHovering ? "0%" : "-105%")},
    0px,
    0px
  );
  transition: all 0.2s ease;
  width: 100%;
  z-index: 10;
`;
