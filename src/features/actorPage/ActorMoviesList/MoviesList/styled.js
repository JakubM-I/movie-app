import styled from "styled-components";

export const MoviesTileList = styled.div`
  /* margin: 0px auto;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 24px 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px 12px;
  } */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  grid-template-rows: repeat(2, auto);
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  margin-block-end: 40px;

  @media (width < 640px){
    margin-block-end: clamp(2rem, 1.5rem + 2.5vw, 2.5rem);
  }

  @media (width < 566px){
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  }

  @media (width <= 425px){
    grid-template-columns: 1fr;
  }
`;

export const MovieTile = styled.div`
  /* max-width: 324px;
  padding: 16px;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  position: relative;
    
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    padding: 16px;
    margin: 16px 0px 0px 0px;
    flex-flow: row;
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
    /* padding: 0; */
    gap: 16px;
    justify-content: flex-start;
  }
`;

export const ImgMovie = styled.img`
  /* width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
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

export const MovieInfo = styled.div`
  /* display: flex;
  flex-flow: column;
  align-items: left;
  margin: 16px 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    margin: 0px 16px;
  } */
  /* padding: 0 16px; */
  /* height: 100%; */
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
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  @media (max-width: 425px) {
    font-size: 16px;
    margin: 0;
  }
`;

// export const MovieTitle = styled.p`
//   margin: 0px auto 8px 0px;
//   max-width: 280px;
//   font-weight: 500;
//   font-size: 22px;
//   line-height: 1.3;

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
//     max-width: 126px;
//     font-size: 16px;
//     margin: 0px auto 4px 0px;
//   }
// `;

export const MovieYear = styled.p`
  /* margin: 0px auto 8px 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-size: 13px;
    line-height: 1.3;
  } */
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGrey};
  /* padding-bottom: 8px; */
  margin: 0;
  @media (max-width: 425px) {
    font-size: 13px;
    padding-bottom: 0;
  }
`;