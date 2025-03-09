import styled from "styled-components";

export const ActorName = styled.h2`
  
  font-size: 22px;
  size: 22px;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const ActorCardContainer = styled.div`
  max-width: 208px;
  max-height: 339px;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const ActorImage = styled.img`
  max-width: 173px;
  max-height: 231px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 450px) {
    margin: 16px 16px;
    max-width: 114px;
    max-height: 169px;
  }
`;