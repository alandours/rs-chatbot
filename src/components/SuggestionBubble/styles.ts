import styled from "styled-components";

import { COLORS } from "@/constants/colors";

export const SuggestionBubbleContainer = styled.div`
  display: inline-block;
  margin-bottom: 0.5rem;
  border-radius: 10rem;
  margin-right: 0.5rem;
  padding: 1rem 1.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.GREY.LIGHTISH};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -1%;
`;
