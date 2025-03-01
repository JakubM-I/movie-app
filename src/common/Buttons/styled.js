import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;

  ${({ reverse }) => reverse && css`
    background: ${({ theme }) => theme.colors.grey};
  `}
  ${({ next }) => next && css`
    background: ${({ theme }) => theme.colors.lightBlue};
  `}
`;

export const ButtonsContainer = styled.footer`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  
`;