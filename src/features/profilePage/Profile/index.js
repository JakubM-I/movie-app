import { ProfilePageWrapper } from "./styled";
import { About } from "../About";
import { ProfileMoviesList } from "../ProfileMoviesList";

export const Profile = ({
  image, name, info, birthDate, birthPlace,
  titleCast, moviesCast, titleCrew, moviesCrew
}) => (
  <ProfilePageWrapper>
    <About
      image={image}
      name={name}
      info={info}
      birthDate={birthDate}
      birthPlace={birthPlace}
    />
    <ProfileMoviesList title={titleCast} movies={moviesCast} />
    <ProfileMoviesList title={titleCrew} movies={moviesCrew} />
  </ProfilePageWrapper>
);