import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;

  ${({ $reverse }) => $reverse && css`
    background: ${({ theme }) => theme.colors.grey};
  `}
  ${({ $next }) => $next && css`
    background: ${({ theme }) => theme.colors.lightBlue};
  `}

  @media (max-width: 425px) {
    max-width: 38px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: 425px) {
   font-size: 10px;
   gap: 8px;
   margin: auto;
  }
`;

export const StyledInfoWrapper = styled.div`
  margin-inline: 12px;

  @media (max-width: 425px) {
    margin-inline: 0;
  }
`
export const StyledPageNumber = styled.span`
 font-weight: 600;
`
export const GraySpan = styled.span`
  color: ${({ theme }) => theme.colors.darkerGrey};
`;
export const BlueSpan = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;