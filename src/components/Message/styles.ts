import styled from "styled-components";

import { COLORS } from "@/constants/colors";
import { MessageRoles } from "@/constants";

type StyledProps = {
  $variant: MessageRoles;
};

export const MessageContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  ${({ $variant }) =>
    `align-items: ${
      $variant === MessageRoles.USER ? "flex-end" : "flex-start"
    }`};
  margin-bottom: 2rem;
`;

export const MessageHeader = styled.div<StyledProps>`
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  margin-bottom: 0.25rem;
  max-width: 29rem;

  ${({ $variant }) => `
    flex-direction: ${$variant === MessageRoles.USER ? "row-reverse" : "row"}
  `};
`;

export const Username = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Time = styled.div`
  color: ${COLORS.GREY.DARK};
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

export const Message = styled.div<StyledProps>`
  border-radius: 0.25rem;
  font-size: 1.25rem;
  max-width: 29rem;
  padding: 1rem;

  ${({ $variant }) => `
    background: ${
      $variant === MessageRoles.USER ? COLORS.YELLOW : COLORS.GREY.LIGHTER
    };
    
    color: ${
      $variant === MessageRoles.LOADER ? COLORS.GREY.DARK : COLORS.BLACK
    };
  `};
`;
