import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin: 0px;
  padding: 20px;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-flow: row;
  align-items: start;
`;

export const PersonalInfo = styled.div`
  max-height: 260px;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0px 40px;
`;

export const Img = styled.img`
  width: 100vw;
  max-width: 399px;
  max-height: 564px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 35px;
  margin: 0px 0px 20px 0px;
`;

export const TextInfo = styled.span`
  margin: 0px;
  color: #000;
  font-weight: normal;
`;

export const HeaderInfo = styled.p`
  margin: 5px 0px;
  font-size: small;
  color: #555;
`;

export const InfoWrapper = styled.p`
  margin: 20px 0 0 0;
`;