import styled from "styled-components";

export const PersonTileList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  grid-template-rows: repeat(2, auto);
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  margin-block-end: 40px;

  @media (width <= 1024px){
    gap: clamp(1rem, 0.8295rem + 0.8523vw, 1.375rem);
  }

  @media (width < 640px){
    margin-block-end: clamp(2rem, 1.5rem + 2.5vw, 2.5rem);
  }

  @media (width < 566px){
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  }

  @media (width <= 425px){
    grid-template-columns: repeat(2, 1fr);
  }
  /* margin: 0px;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 24px 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 16px 16px;
  } */
`;

export const PersonTile = styled.div`
  height: 100%;
  aspect-ratio: 208 / 339;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (width <= 768px){
    gap: clamp(0.5rem, 0.3214rem + 0.8929vw, 0.75rem);
    padding: clamp(0.5rem, 0.1429rem + 1.7857vw, 1rem);
  }

   @media (width <= 566px){
    aspect-ratio: 136 / 245;
   }
  /* flex: 0 0 208px;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 16px 0px 16px;
  border-radius: 5px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex: 0 0 136px;
    padding: 8px 8px 0px 8px;
  } */
`;

export const ImgPerson = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 21;

@media (width <= 566px){
    aspect-ratio: 120 / 178;
  }
  /* width: 176px;
  height: 231px;
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 120px;
    height: 178px;
    border-radius: 5px;
  } */
`;

export const NameWrapper = styled.div`
  /* max-width: 176px; */
  /* max-height: 100%; */
  width: 10%;
  /* margin: 12px auto 16px; */
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 120px;
    max-height: 100%;
    margin: 8px;
    display: flex;
    lex-direction: column;
    justify-content: space-between;
  } */
`;


export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (width <= 768px){
    font-size: clamp(0.875rem, 0.5179rem + 1.7857vw, 1.375rem);
  }
  /* font-weight: 500;
  font-size: 22px;
  margin: 0px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  } */
`;

export const Character = styled.p`
  /* margin: 8px 0px 0px 0px; */
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;