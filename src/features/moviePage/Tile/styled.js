import styled from "styled-components";

export const MovieTile = styled.div`
  margin: 50px;
  max-width: 1000px;
  display: flex;
  flex-flow: row;
  align-items: start;
`;

export const MovieData = styled.div`
  max-height: 412px;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0 10px;
`;

export const ImgSmall = styled.img`
  width: 90vw;
  max-width: 312px;
  max-height: 464px; 
`;

export const MovieTitle = styled.p`
  font-weight: bold;
  font-size: 40px;
`;

export const MovieDescription = styled.p`
  font-size: small;
`;