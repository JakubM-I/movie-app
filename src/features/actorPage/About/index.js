import {
  AboutWrapper,
  Img,
  PersonalInfo,
  Name,
  InfoWrapper,
  HeaderInfo,
  TextInfo
} from "./styled";

export const About = ({ image, name, birthday, place_of_birth, biography }) => (
  <AboutWrapper>
    <Img src={image} alt="" />
    <PersonalInfo>
      <Name>{name}</Name>
      <HeaderInfo>
        {"Date of birth: "}
        <TextInfo>{birthday}</TextInfo>
      </HeaderInfo>
      <HeaderInfo>
        {"Place of birth: "}
        <TextInfo>{place_of_birth}</TextInfo>
      </HeaderInfo>
      <InfoWrapper>{biography}</InfoWrapper>
    </PersonalInfo>
  </AboutWrapper>
)