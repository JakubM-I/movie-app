import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  /* margin: 10px 0px 0px 16px; */
  /* width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  font-size: 14px;
  gap: 12px; */
  /* position: absolute; 
  bottom: 0;
  left: 0; */
  margin-block: auto 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 12px;
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    /* margin: 0px;
    max-height: 20px;
    font-size: 13px;
    position: static; */
    margin: 0px;
    font-size: 13px;
  }
`;

export const Star = styled(StarIcon)`
  /* height: 22px;
  width: auto;
  transform: translate(-8%); */
  height: 24px;
  width: 24px;
  /* margin-inline-end: 8px; */
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
  /* margin-inline-end: 8px; */
  line-height: 1.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

// export const OutOf = styled.span`
//   line-height: 1.2;

//   @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
//     display: none;
//   }
// `;

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