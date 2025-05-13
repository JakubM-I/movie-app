import styled from "styled-components";

export const MoviesListWrapper = styled.div`
  max-width: 100%;
  margin: 0px auto 40px;
  padding: 0px;
`;

export const SubHeader = styled.h2`
  max-width: 100%;
  margin: 24px 0px 32px 0px;
  padding-left: 16px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    margin: 0px 0px 12px 0px;
    padding-left: 8px;
    font-size: 20px;
  }  
`;