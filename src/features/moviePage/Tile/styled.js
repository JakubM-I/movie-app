import styled from "styled-components";

export const MovieTile = styled.div`
  margin: 64px auto;
  max-width: 100%;
  width: 100vw;
  max-height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-flow: row;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-flow: column;
    align-items: center;
  };
`;

export const MovieData = styled.div`
  max-height: auto;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 40px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px 40px 40px 40px;
  };  
`;

export const Poster = styled.img`
  width: 100vw;
  width: 312px;
  height: 464px;
  margin: 40px;
  border-radius: 5px; 
`;

export const MovieTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0px 0px 0px;
`;

export const MovieYear = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  margin: 24px 0 0 0;
`;

export const MovieDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin: 24px 0 0 0;
`;