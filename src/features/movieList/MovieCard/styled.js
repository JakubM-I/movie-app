import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  margin-top: 20px;
  max-width: 1368px;
  max-height: 1391px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 324px), 1fr));

`;

export const MovieCardContainer = styled.div`
  width: 324px;
  height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  

  @media (max-width: 450px) {
    max-width: 288px;
    max-height: 201px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-right: none;
  }
`;

export const MovieDetailsCointainer = styled.div`
  padding: 0 16px;
  @media (max-width: 450px) {     
  }
`;

export const MovieImage = styled.img`
  max-width: 292px;
  max-height: 434px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 450px) {
    margin: 16px 16px 0px 16px;
    max-width: 114px;
    height: auto;
    padding: 0 0;
    margin-right: 0;
  }
`;

export const MovieTitle = styled.h2`
  margin: 16px 0;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.div`
  font-size: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  padding-bottom: 8px;
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const MovieGenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  font-size: 16px;    

  @media (max-width: 450px) {
   max-width: 107px;
   max-height: 46px;
   display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: flex-start;
  }
`;

export const MovieGenre = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 16px;
  @media (max-width: 450px) {
   max-width: 107px;
   max-height: 46px;
   padding: 4px 8px;
    font-size: 10px;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

export const MovieRatingContainer = styled.div`
  display: flex;
  margin: 16px 0;
  padding: 0 16px; ;
  margin-top: auto;
  font-size: 16px;
  justify-content: flex-start;
  @media (max-width: 450px) {
    font-size: 13px;
    padding: 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
`;

export const MovieRating = styled.div`
  padding-right: 8px;
  margin-top: 52px;
 
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 52px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;


