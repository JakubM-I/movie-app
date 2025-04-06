import styled from "styled-components";

export const MovieTile = styled.div`
  margin: 50px;
  max-width: 1368px;
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

export const Poster = styled.img`
  width: 100vw;
  width: 312px;
  height: 464px;
  border-radius: 15px; 
`;

export const MovieTitle = styled.p`
  font-weight: bold;
  font-size: 40px;
  margin: 5px 0 20px 0;
`;

export const MovieDescription = styled.p`
  font-size: small;
  margin: 20px 0 0 0;
`;