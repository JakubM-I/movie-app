import { useSelector } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
} from "./styled";

export const ActorCard = ({ actorId, actorName, actorImage, emptyImage }) => {

  const actors = useSelector(moviesActorSelector);
  const getActorDetails = (actors, actorId) => {
    if (!Array.isArray(actors)) {
      console.error('Actors is not an array:', actors);
      return [];
    }

    const actorDetails = actors.find((actor) => actor.id === actorId);

    if (actorDetails) {
      return {
        name: actorDetails.name,
        image: actorDetails.profile_path
          ? `https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`
          : emptyImage,
      };
    }
    return null;
  }
  console.log(emptyImage, "emptyImage")
  const { name, image } = getActorDetails(actors, actorId, emptyImage) || { name: actorName, image: actorImage };
  // console.log("ActorDetails", name, image);

  return (
    <ActorCardContainer key={actorId}>
      <ActorImage
        src={image}
      />
      <ActorName>{actorName}</ActorName>
    </ActorCardContainer>
  );
};