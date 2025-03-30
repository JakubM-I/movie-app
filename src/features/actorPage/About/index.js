import {
  AboutWrapper,
  Img,
  PersonalInfo,
  Name,
  InfoWrapper,
  BirthdayWrapper,
  HeaderInfo,
  TextInfo
} from "./styled";

export const About = ({ image, name, day_of_birth, day_of_death, place_of_birth, biography }) => (
  <AboutWrapper>
    <Img src={image} alt="" />
    <PersonalInfo>
      <Name>{name}</Name>
      {(day_of_birth !== null) ? (
        <>
          <BirthdayWrapper>
            <HeaderInfo>
              {"Date of birth: "}
              <TextInfo>{day_of_birth}</TextInfo>
            </HeaderInfo>
            {(day_of_death !== null) ? (
              <HeaderInfo>
                {"Date of death: "}
                <TextInfo>{day_of_death}</TextInfo>
              </HeaderInfo>
            ) : null}
          </BirthdayWrapper>
          <HeaderInfo>
            {"Place of birth: "}
            <TextInfo>{place_of_birth}</TextInfo>
          </HeaderInfo>
        </>
      ) : null}
      <InfoWrapper>{biography}</InfoWrapper>
    </PersonalInfo>
  </AboutWrapper>
)