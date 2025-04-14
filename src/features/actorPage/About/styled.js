import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 1368px;
  height: auto;
  max-width: calc(100%-2*12px);
  max-width: 100vw;
  margin: 56px auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-areas:
    "picture data"
    "picture description";
  grid-template-columns: 399px 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;
  grid-gap: 0 24px;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: 399px 1fr;
    grid-template-rows: 564px 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    grid-gap: 24px;
    padding: 24px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 130px 1fr;
    grid-template-rows: 163px 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    padding: 16px;
    grid-gap: 8px 16px;
  }
`;

export const PersonalInfo = styled.div`
  max-width: 75%;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0px;
  grid-area: data;
`;

export const Img = styled.div`
  padding-top: calc(100%  * 632 / 421);
  max-width: 399px;
  max-height: 564px;
  background: url("${({ url }) => url}");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  grid-area: picture;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 116px;
    max-height: 163px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 35px;
  margin: 0px 0px 20px 0px;
`;

export const BirthdayWrapper = styled.div`
  margin: 0px;
  width: 100vw;
  max-width: 40%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
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
  max-width: 849px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  margin: 20px 0 0 0;
  grid-area: description;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    max-width: 900px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    max-width: 600px;
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 240px;
    font-size: 14px;
  }
  `;