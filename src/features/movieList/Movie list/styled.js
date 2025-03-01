import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1368px;
  margin: 0 auto;
`;

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  margin-top: 20px;
  max-width: 1368px;
  max-height: 1391px;

  justify-content: center;
  align-items: center;

  @media (max-width: 1375px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  @media (max-width: 1065px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    ;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    
  }
`;