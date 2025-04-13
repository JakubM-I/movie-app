import styled from "styled-components";

export const Top = styled.div`
  position: relative;
  width: 100vw;
  max-width:100%;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ImgBig = styled.img`
  width: 100vw;
  max-width: 100%;
`;

export const Vignette = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-wrap: wrap;
  background:
   linear-gradient(00deg, black, transparent 30%, transparent 70%, black),
   linear-gradient(90deg, black, transparent 20%, transparent 80%, black);
  `;

export const TitleWrapper = styled.div`
  max-width: auto;
  max-height: auto;
  margin: auto auto 56px 110px;

`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 1.2;
  margin: 0px;
`;