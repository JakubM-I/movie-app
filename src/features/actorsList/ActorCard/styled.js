import styled from "styled-components";


export const ActorName = styled.h2`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (width <= 768px){
    font-size: clamp(0.875rem, 0.5179rem + 1.7857vw, 1.375rem);
  }
`;

export const ActorCardContainer = styled.div`
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

export const ActorDetailsCointainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 21;

@media (width <= 566px){
    aspect-ratio: 120 / 178;
  }
`;