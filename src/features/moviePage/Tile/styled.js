import styled from "styled-components";

export const MovieTile = styled.article`
  margin: 64px auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-areas:
    "picture data"
    "picture description";
  grid-template-columns: 312px 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;
  grid-gap: 0 24px;
  border-radius: 5px;
 
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 260px 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    grid-gap: 24px;
    padding: 24px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 114px 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    padding: 16px;
    grid-gap: 8px 16px;
  }
`;

export const MovieData = styled.div`
  width: 100vw;
  max-width: 936px;
  margin-top: 40px;
  grid-area: data;
`;

export const Poster = styled.div`
  padding-top: calc(100%  * 632 / 421);
  background: url("${({ url }) => url}");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  grid-area: picture;
`;

export const MovieTitle = styled.h1`
  max-width: 100%;
  width: 100vw;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.0;
    margin: 4px 0px 0px 0px;
  }
`;

export const MovieYear = styled.p`
  max-width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  margin: 24px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    font-weight: 200;
    font-size: 16px;
    line-height: 1.0;
    margin: 12px 0px 0px 0px;
  }
`;

export const MovieDescription = styled.p`
  max-width: 936px;
  margin-top: 24px;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    max-width: 736px;
    margin-top: 8px;
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 536px;
    margin-top: 8px;
    font-size: 12px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    max-width: 336px;
    margin-top: 4px;
    font-size: 10px;
  }
`;