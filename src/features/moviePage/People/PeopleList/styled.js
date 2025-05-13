import styled from "styled-components";

export const PersonTileList = styled.div`
  margin: 0px;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const PersonTile = styled.div`
  flex: 0 0 208px;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 16px 0px 16px;
  border-radius: 5px;
  margin: 0px 20px 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex: 0 0 136px;
    background: ${({ theme }) => theme.colors.white};
    padding: 8px 8px 0px 8px;
    border-radius: 2px;
    margin: 0px 8px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const ImgPerson = styled.img`
  width: 100vw;
  max-width: 176px;
  height: 231px;
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100vw;
    max-width: 120px;
    height: 178px;
    border-radius: 2px;
  }
`;

export const NameWrapper = styled.div`
  max-width: 176px;
  max-height: 100%;
  margin: 12px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 120px;
    max-height: 100%;
    margin: 8px;
    display: flex;
    lex-direction: column;
    justify-content: space-between;
  }
`;


export const Name = styled.p`
  font-weight: 500;
  font-size: 22px;
  margin: 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 500;
    font-size: 14px;
    margin: 0px;
    text-align: center;
  }
`;

export const Character = styled.p`
  margin: 8px 0px 0px 0px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 8px 0px 0px 0px;
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkerGrey};
    text-align: center;
  }
`;