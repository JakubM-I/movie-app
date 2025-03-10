import { Profile } from "./Profile";
import { profile } from "./testData/profile";

function ProfilePageApp() {

  const image = profile.About.ImagePerson;
  const name = profile.About.PersonalInfo.Name;
  const birthDate = profile.About.PersonalInfo.BirthDate;
  const birthPlace = profile.About.PersonalInfo.BirthPlace;
  const info = profile.About.PersonalInfo.Info;
  const titleCast = profile.MoviesCast.Title;
  const moviesCast = profile.MoviesCast.Movies;
  const titleCrew = profile.MoviesCrew.Title;
  const moviesCrew = profile.MoviesCrew.Movies;

  return (
    <Profile
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

export default ProfilePageApp;