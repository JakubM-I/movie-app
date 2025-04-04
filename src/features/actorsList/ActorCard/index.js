import { useSelector } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
  ActorDetailsCointainer,
} from "./styled";

export const ActorCard = ({ actorId, actorName, actorImage }) => {

  console.log("Wszystko", actorId, actorName, actorImage);

  const actors = useSelector(moviesActorSelector);
  console.log("Actors", actors);

  const getActorDetails = (actors, actorId) => {
    if (!Array.isArray(actors)) {
      console.error('Actors is not an array:', actors);
      return [];
    }

    const actorDetails = actors.find((actor) => actor.id === actorId);
    if (actorDetails) {
      return {
        name: actorDetails.name,
        image: actorDetails.profile_path,
      };
    }
    return null;
  }

  const { name, image } = getActorDetails(actors, actorId) || { name: actorName, image: actorImage };
  console.log("ActorDetails", name, image);

  return (
    <ActorCardContainer key={actorId}>
      <ActorImage
        src={actorImage ? `https://image.tmdb.org/t/p/w500${actorImage}` : "default-image.jpg"}
      />
      <ActorName>{actorName}</ActorName>
    </ActorCardContainer>
  );
};