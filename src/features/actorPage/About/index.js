import {
  AboutWrapper,
  Img,
  PersonalInfo,
  Name,
  InfoWrapper,
  HeaderInfo,
  TextInfo
} from "./styled";

export const About = ({ image, name, info, birthDate, birthPlace }) => (
  <AboutWrapper>
    <Img src={image} alt="" />
    <PersonalInfo>
      <Name>{name}</Name>
      <HeaderInfo>
        {"Date of birth: "}
        <TextInfo>{birthDate}</TextInfo>
      </HeaderInfo>
      <HeaderInfo>
        {"Place of birth: "}
        <TextInfo>{birthPlace}</TextInfo>
      </HeaderInfo>
      <InfoWrapper>{info}</InfoWrapper>
    </PersonalInfo>
  </AboutWrapper>
)