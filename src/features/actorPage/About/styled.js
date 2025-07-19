import styled from "styled-components";

export const AboutWrapper = styled.div`
  margin-block: 56px 64px;
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
  row-gap: 24px;
  column-gap: 40px;
  border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    gap: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-block: 23px 24px;
    padding: 16px;
    grid-template-columns: 116px 1fr;
     grid-template-rows: auto 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    gap: 16px;
  }
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 24px;
  margin: 0px;
  padding-block-start: 8px;
  grid-area: data;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    column-gap: 16px;
    row-gap: 8px;
  }
`;

export const Img = styled.div`
  padding-top: calc(100%  * 632 / 421);
  background: url("${({ $url }) => $url}");
  background-size: 399px 564px;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 5px;
  grid-area: picture;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    background-position: center;
    background-size: cover;
   }
`;

export const Name = styled.p`
  max-width: 55vw;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.3;
    margin-block-end: 8px;
  }  
`;

export const BirthdayWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export const TextInfo = styled.span`
  margin: 0px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const HeaderInfo = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const InfoWrapper = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;