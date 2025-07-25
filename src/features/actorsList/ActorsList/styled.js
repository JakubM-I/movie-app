import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: min(1400px, 100%);
  margin: 0 auto;
  padding-inline: 16px;
  padding-block-start: 56px;
  padding-block-end: 103px;

  @media (width < 640px){
    padding-block-start: clamp(1.5rem, -0.5rem + 10vw, 3.5rem);
    padding-block-end: clamp(1.9375rem, -2.5625rem + 22.5vw, 6.4375rem);
  }
`;

export const ActorsListContainer = styled.div`
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`
