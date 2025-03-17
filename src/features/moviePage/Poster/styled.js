import styled from "styled-components";

export const Top = styled.div`
  width:100%;
  height: 770px;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ImgBig = styled.img`
  display: block;
  width: 100vw;
  max-width: 1350px;
  max-height: 770px;
`;