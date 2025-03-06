import styled from "styled-components";

export const PeopleList = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
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

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }  
`;