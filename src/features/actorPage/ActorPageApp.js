import { ActorPage } from "./ActorPage";
import { actor } from "./testData/actorData";

function ActorPageApp() {

  const image = actor.About.ImagePerson;
  const name = actor.About.PersonalInfo.Name;
  const birthDate = actor.About.PersonalInfo.BirthDate;
  const birthPlace = actor.About.PersonalInfo.BirthPlace;
  const info = actor.About.PersonalInfo.Info;
  const titleCast = actor.MoviesCast.Title;
  const moviesCast = actor.MoviesCast.Movies;
  const titleCrew = actor.MoviesCrew.Title;
  const moviesCrew = actor.MoviesCrew.Movies;

  return (
    <ActorPage
      image={image}
      name={name}
      birthDate={birthDate}
      birthPlace={birthPlace}
      info={info}
      titleCast={titleCast}
      moviesCast={moviesCast}
      titleCrew={titleCrew}
      moviesCrew={moviesCrew}
    />
  );
};

export default ActorPageApp;