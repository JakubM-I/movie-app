import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;
  max-height: 1391px;
`;


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

  @media (max-width: 1375px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  @media (max-width: 1065px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    ;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    
  }
`;

export const MovieCard = styled.div`
  width: 324px;
  height: 650px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieDetailsCointainer = styled.div`
  padding: 0 16px;
`;

export const MovieImage = styled.img`
  width: 292px;
  height: 434px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
`;



export const MovieTitle = styled.h2`
  margin: 16px 0;
  font-size: 500;
  font-weight: bold;
  
`;

export const MovieYear = styled.div`
  margin: 16px 0;
  
  font-size: 400;
  color: #7e839a;
`;

export const MovieGenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  font-size: 16px; 
`;

export const MovieGenre = styled.div`
  display: inline-block;
  background-color: #e4e6f0;
  font-size: 400;
  border-radius: 8px;
  padding: 8px 16px;
  
`;

export const MovieRatingContainer = styled.div`
  display: grid;
  
  grid-template-columns: 72px 1fr;
  margin: 16px 0;
  padding: 0 16px; 
  font-size: 400; 
  align-self: flex-end;
`;

export const MovieRating = styled.div``;

export const Votes = styled.div`
  font-size: 400;
  color: #7e839a;
`;

export const Text = styled.text`
`

