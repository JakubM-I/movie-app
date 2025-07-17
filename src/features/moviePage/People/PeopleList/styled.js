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
`;

export const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;


export const Name = styled.p`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (width <= 768px){
    font-size: clamp(0.875rem, 0.5179rem + 1.7857vw, 1.375rem);
  }
`;

export const Character = styled.p`
  width: 100%;
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;