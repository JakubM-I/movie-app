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
  max-width: 208px;
  width: 100vw;
  max-height: 339px;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 16px 0px 16px;
  border-radius: 5px;
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
  font-weight: 500;
  font-size: 22px;
  margin: 0px auto;
`;

export const Character = styled.p`
  margin: 8px auto auto auto;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkerGrey};
`;