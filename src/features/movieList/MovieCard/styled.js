import styled from "styled-components";


export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

  @media (max-width: 350px) {
    max-width: 268px;
    max-height: 201px;
  }
`;

export const MovieDetailsCointainer = styled.div`
  padding: 0 16px;
`;

export const MovieImage = styled.img`
  max-width: 292px;
  max-height: 434px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 350px) {
    display: block;
    margin-left: 0;
    max-width: 114px;
    max-height: 169px;
  }
`;



export const MovieTitle = styled.h2`
  margin: 16px 0;
  font-size: 22px;
  font-weight: 500;
`;

export const MovieYear = styled.div`
  margin: 16px 0;
  font-size: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
`;

export const MovieGenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  font-size: 16px; 
`;

export const MovieGenre = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  padding: 8px 16px; 
`;

export const MovieRatingContainer = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  margin: 16px 0;
  padding: 0 16px; 
  font-size: 16px; 
  align-self: flex-end;
`;

export const MovieRating = styled.div``;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.darkerGrey};
`;


