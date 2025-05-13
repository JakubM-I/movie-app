import styled from "styled-components";

export const MoviesTileList = styled.div`
  margin: 0px auto 0;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`;

export const MovieTile = styled.div`
  max-width: 324px;
  padding: 16px;
  margin: 24px 16px 0px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-flow: column;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    padding: 16px;
    margin: 16px 0px 0px 0px;
    flex-flow: row;
    justify-content: start;
  }
`;

export const ImgMovie = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    margin-left: 16px;
  }
`;

export const MovieTitle = styled.p`
  margin: 16px auto 8px 0px;
  max-width: 280px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-size: 16px;
    margin: 0px auto 0px 0px;
  }
`;

export const MovieYear = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-size: 13px;
    line-height: 1.3;
  }
`;