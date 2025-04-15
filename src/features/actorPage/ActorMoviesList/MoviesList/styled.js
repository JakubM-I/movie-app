import styled from "styled-components";

export const MoviesTileList = styled.div`
  margin: 24px auto 0;
  padding: 0;
  max-width: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 24px 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

export const MovieTile = styled.div`
  width: 324px;
  max-width: 100vw;
  padding: 16px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-flow: row;
    justify-content: start;
  }
`;

export const ImgMovie = styled.img`
  width: 100vw;
  max-width: 292px;
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
    width: 126px;
    margin-left: 16px;
  }
`;

export const MovieTitle = styled.p`
  margin: 0px auto 8px 0px;
  max-width: 280px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
    font-size: 13px;
    line-height: 1.3;
  }
`;