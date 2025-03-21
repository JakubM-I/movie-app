import { ActorPageWrapper } from "./styled";
import { About } from "../About";
import { ActorMoviesList } from "../ActorMoviesList";

export const ActorPage = ({
  image, name, info, birthDate, birthPlace,
  titleCast, moviesCast, titleCrew, moviesCrew
}) => (
  <ActorPageWrapper>
    <About
      image={image}
      name={name}
      info={info}
      birthDate={birthDate}
      birthPlace={birthPlace}
    />
    <ActorMoviesList title={titleCast} movies={moviesCast} />
    <ActorMoviesList title={titleCrew} movies={moviesCrew} />
  </ActorPageWrapper>
);