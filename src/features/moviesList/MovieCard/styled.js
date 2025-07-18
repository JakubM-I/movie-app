import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 8px;
  margin-top: 20px;
  max-width: 1368px;
  max-height: 1391px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 324px), 1fr));
`;

export const MovieCardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 12px 0px #BAC7D580;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  position: relative;
  
  @media (max-width: 425px) {
    width: 100%;
    max-height: 201px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
  }
`;

export const MovieDetailsContainer = styled.div`
  padding: 0 16px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (width <= 425px){
    padding: 0;
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  max-width: 292px;
  max-height: 434px;
  aspect-ratio: 2 /3;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 425px) {
    margin: 0;
    max-width: 114px;
    height: auto;
    padding: 0;
  }
`;

export const MovieTitle = styled.h2`
  margin: 16px 0;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 425px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const MovieYear = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  padding-bottom: 8px;
  @media (max-width: 425px) {
    font-size: 13px;
    padding-bottom: 0;
  }
`;

export const MovieGenreContainer = styled.div`
  display: grid;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px;
  font-size: 16px;

  @media (max-width: 425px) {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: flex-start;
  }
`;

export const MovieGenre = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: 14px; 
  border-radius: 6px;
  padding: 8px;
  margin: 0 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  flex: 0 0 auto;

  @media (max-width: 425px) {
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
  /* position: absolute;  */
  /* bottom: 0; */
  /* left: 0; */
  width: 100%;
  padding: 10px;
  margin-top: auto; 
  margin-bottom: 0;
  font-size: 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  @media (max-width: 425px) {
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin-top: 0;
  }
`;

export const MovieRating = styled.div`
  /* padding-right: 8px; */
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Votes = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  /* display: flex; */
  /* align-items: center; */
  /* margin-left: 8px; */
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const MovieStar = styled.span`
  font-size: 22px;
  @media (max-width: 450px) {
    font-size: 16px;
  }
  `

