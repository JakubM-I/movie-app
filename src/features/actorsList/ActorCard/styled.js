import styled from "styled-components";

export const ActorCardContainer = styled.div`
  width: 208px;
  height: 339px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  
`;

export const ActorDetailsCointainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorImage = styled.img`
  max-width: 177px;
  max-height: 264px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;

`;

export const ActorName = styled.h2`
  margin: 16px 0;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
 
`;