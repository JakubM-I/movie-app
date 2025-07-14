import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: min(1368px, 100%);
  margin: 0 auto;
  padding-inline: 8px;
  padding-block-start: 56px;
  @media (width < 640px){
    padding-block-start: clamp(1.5rem, -0.5rem + 10vw, 3.5rem);
  }

`;

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  grid-template-rows: repeat(2, auto);
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  @media (width < 566px){
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
  }

  @media (width <= 425px){
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  
  color: ${({ theme }) => theme.colors.black};
`;