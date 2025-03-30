import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1368px;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 288px;  }
`;

export const ActorsListContainer = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 20px;
  max-width: 1368px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
 
`;
