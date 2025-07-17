import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  /* margin: 24px 0px 0px 0px; */
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    max-height: 20px;
    font-size: 13px;
  }
`;

export const Star = styled(StarIcon)`
  height: 24px;
  width: 24px;
  margin-inline-end: 8px;
  align-self: flex-start;
  /* transform: translate(-8%); */
  
  //no vote vertically
  ${({ hidden }) => hidden && css`
    width: 0px;
    display: unset;
  `}
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;

export const Average = styled.strong`
  font-size: 22px;
  font-weight: 500;
  margin-inline-end: 8px;
  line-height: 1.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
    margin-left: 4px;
  }
`;

export const OutOf = styled.span`
  margin-inline-end: 8px;
  line-height: 1.2;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
    height: 0px;
  }
`;

export const Count = styled.p`
  margin: 0px;

  /* ${({ $noVotes }) => $noVotes && css`
    margin-left: 0px;
  `} */

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    /* margin-left: 4px; */
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;