import styled from "styled-components";

export const PersonTileList = styled.div`
  margin: 20px 0 0 0;
  max-width: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  list-style: none;
  padding: 0;
  grid-gap: 30px;
`;

export const PersonTile = styled.div`
  padding: 0px;
  margin: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const ImgPerson = styled.img`
  margin-bottom: 15px;
  width: 100vw;
  max-width: 176px;
  max-height: 231px;
  border-radius: 5px;
`;

export const Name = styled.p`
  margin: 0px;
`;

export const Character = styled.p`
  margin: 5px 0px;
  font-size: small;
  color: #555;
`;