import styled from "styled-components";

export const MovieTile = styled.article`
  margin-block-end: 24px;
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
  row-gap: 24px;
  column-gap: 40px;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    gap: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-block: 16px 15px;
    padding: 16px;
    grid-template-columns: 114px 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    gap: 16px;
  }
`;

export const MovieData = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 24px;
  margin: 0px;
  padding-block-start: 8px;
  grid-area: data;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    column-gap: 16px;
    row-gap: 8px;
  }
`;

export const Poster = styled.div`
  padding-top: calc(100%  * 632 / 421);
  background: url("${({ $url }) => $url}");
  background-size: 312px 464px;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 5px;
  grid-area: picture;

   @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    background-position: center;
    background-size: cover;
   }
`;

export const MovieTitle = styled.h1`
  max-width: 65vw;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    margin: 0px;
  }
`;

export const MovieYear = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    margin: 4px 0px 0px 0px;
  }
`;

export const MovieDescription = styled.p`
  margin: 0px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;
  text-align: justify;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;