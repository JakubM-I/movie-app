import { imageURL } from "../../common/utils/imageURL";

export const useActorData = ({ actorBase, actorCredits }) => {

  const { biography, birthday, name, place_of_birth, profile_path } = actorBase;

  const image = `${imageURL}/${profile_path}`;

  const moviesCast = actorCredits.cast.slice(0, 4);
  const moviesCrew = actorCredits.crew.slice(0, 4);

  return { image, name, birthday, place_of_birth, biography, moviesCast, moviesCrew };

};