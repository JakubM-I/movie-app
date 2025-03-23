import styled from "styled-components";

export const MoviesTileList = styled.div`
  margin: 20px 0 0 0;
  padding: 0;
  max-width: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 30px;
`;

export const MovieTile = styled.div`
  max-width: 100vw;
  padding: 0px;
  margin: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ImgMovie = styled.img`
  margin-bottom: 15px;
  width: 100vw;
  max-width: 292px;
  height: 434px;
  border-radius: 5px;
`;

export const MovieTitle = styled.p`
  margin: 0px;
  max-width: 280px;
`;

export const MovieYear = styled.p`
  margin: 5px 0px;
  font-size: small;
  color: #555;
`;