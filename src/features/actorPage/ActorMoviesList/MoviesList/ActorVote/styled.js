import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin-block: auto 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 12px;
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    font-size: 13px;
  }
`;

export const Star = styled(StarIcon)`
  height: 24px;
  width: 24px;
  align-self: flex-start;
  
  //no vote vertically
  ${({ hidden }) => hidden && css`
    width: 0px;
    display: unset;
  `}
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
    width: 16px;
    padding-block-end: 2px;
  }
`;

export const Average = styled.strong`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Count = styled.p`
  margin: 0px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.darkerGrey};

  ${({ $noVotes }) => $noVotes && css`
    margin-left: 0px;
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    
  }
`;