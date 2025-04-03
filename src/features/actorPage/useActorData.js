import { API_imageURL } from "../../common/detailsPages/API_imageURL";
import emptyImage from "../actorPage/actorImages/emptyImage.png";

export const useActorData = ({ actorBase, actorCredits }) => {

  const { biography, birthday, deathday, name, place_of_birth, profile_path } = actorBase;

  const image = (profile_path !== null) ? `${API_imageURL}/${profile_path}` : emptyImage;

  const moviesCast = actorCredits.cast;
  const moviesCrew = actorCredits.crew;

  const day_of_birth = (birthday !== null) ? new Date(birthday).toLocaleDateString() : null;
  const day_of_death = (deathday !== null) ? new Date(deathday).toLocaleDateString() : null;

  return { image, name, day_of_birth, day_of_death, place_of_birth, biography, moviesCast, moviesCrew };
};