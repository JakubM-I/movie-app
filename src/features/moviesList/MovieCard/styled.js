import styled, { css }  from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

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
  /* width: 100%;
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
  } */
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap:  16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (width <= 425px){
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: flex-start;
  }
`;

export const MovieImage = styled.img`
  /* width: 100%;
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
  } */
  width: 100%;
  max-width: 292px;
  max-height: 434px;
  aspect-ratio: 2 /3;
  display: block;
  margin: 0;
  border-radius: 10px;

  @media (max-width: 425px) {
    margin: 0;
    max-width: 114px;
    height: auto;
    padding: 0;
  }
`;

export const MovieDetailsContainer = styled.div`
  /* padding: 0 16px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (width <= 425px){
    padding: 0;
    gap: 8px;
    justify-content: flex-start;
  } */
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;

  @media (width <= 425px){
    padding: 0;
    gap: 8px;
    justify-content: flex-start;
  }
`;

export const MovieTitle = styled.h2`
  /* margin: 16px 0;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 425px) {
    font-size: 16px;
    margin: 0;
  } */
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 425px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const MovieYear = styled.div`
  /* font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  padding-bottom: 8px;
  @media (max-width: 425px) {
    font-size: 13px;
    padding-bottom: 0;
  } */

  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin: 0;
  @media (max-width: 425px) {
    font-size: 13px;
    padding-bottom: 0;
  }
`;

export const MovieGenreContainer = styled.div`
  /* display: grid;
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
  } */

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const MovieGenre = styled.div`
  /* background-color: ${({ theme }) => theme.colors.grey};
  font-size: 14px; 
  border-radius: 6px;
  padding: 8px;
  margin: 0;
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
  } */

  padding: 8px 16px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px;
    font-weight: 400;
    font-size: 10px;
  }
`;

export const MovieRatingContainer = styled.div`
  /* display: flex;
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
  } */

  margin-block: auto 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 12px;
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    font-size: 13px;
    gap: 8px;
  }
`;

export const MovieStar = styled(StarIcon)`
  /* font-size: 22px;
  @media (max-width: 450px) {
    font-size: 16px;
  } */

  height: 24px;
  width: 24px;
  align-self: flex-start;
  
  //no vote vertically
  ${({ hidden }) => hidden && css`
    width: 0px;
    display: unset;
  `}
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
    width: 16px;
    padding-block-end: 2px;
  }
`;

export const MovieRating = styled.div`
  /* font-weight: bold;
  display: flex;
  align-items: center; */

  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const Votes = styled.div`
  /* font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  @media (max-width: 425px) {
    font-size: 12px;
  } */

  margin: 0px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.darkerGrey};

  ${({ $noVotes }) => $noVotes && css`
    margin-left: 0px;
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    
  }
`;



