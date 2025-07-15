import styled from "styled-components";


export const ActorName = styled.h2`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (width <= 1024px){
    font-size: clamp(0.875rem, 0.6477rem + 1.1364vw, 1.375rem);
  }
`;

export const ActorCardContainer = styled.div`
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
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

`;