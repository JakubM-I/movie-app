import { ProfilePageWrapper } from "./styled";
import { About } from "../About";

export const Profile = ({ image, name, info, birthDate, birthPlace }) => (
  <ProfilePageWrapper>
    <About
      image={image}
      name={name}
      info={info}
      birthDate={birthDate}
      birthPlace={birthPlace}
    />
  </ProfilePageWrapper>
);