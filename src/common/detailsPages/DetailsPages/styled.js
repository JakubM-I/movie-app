import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: min(1368px, 100%);
  margin: 0 auto;
  padding-inline: 8px;
  padding-block-end: 103px;

  @media (width < 640px){
    /* padding-block-start: clamp(1.5rem, -0.5rem + 10vw, 3.5rem); */
    /* padding-block-end: clamp(1.9375rem, -2.5625rem + 22.5vw, 6.4375rem); */
  }
  /* max-width: 1368px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-flow: column;
    align-items: center;
  } */
`;