import { styled } from "styled-components";

export const StyledPageTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 24px;
  align-self: flex-start;
  /* max-height: 1391px; */

  @media (width < 640px){
    font-size: clamp(1.125rem, 0rem + 5.625vw, 2.25rem);
    margin-block-end: clamp(0.75rem, 0rem + 3.75vw, 1.5rem);
  }
`;