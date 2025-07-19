import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 8px;
  row-gap: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    margin-top: 20px; 
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-top: 16px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 12px;  
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-wrap: nowrap;
    gap: 4px;
    margin-top: 8px;  
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-top: 4px;  
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 7px;
  margin-inline-end: 4px;
  font-size: 16px;
  font-weight: 400;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    font-size: 13px;
    gap: 2px;
    margin-inline-end: 4px;
  }
`

export const Star = styled(StarIcon)`
  height: 40px;
  width: 40px;
  /* margin-inline-end: 8px; */
  align-self: flex-start;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
    width: 16px;
    /* padding-block-end: 2px; */
  }
`;

export const Average = styled.strong`
  font-size: 30px;
  font-weight: 500;
  /* margin-inline-end: 8px; */
  line-height: 1.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const OutOf = styled.span`
  /* margin-inline-end: 8px; */
  line-height: 1.2;
  /* margin-inline-end: 4px; */
`;

export const Count = styled.p`
  margin: 0px;
  line-height: 1.2;
  width: 100%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    width: auto;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;