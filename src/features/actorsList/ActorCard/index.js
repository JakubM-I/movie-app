import { useSelector } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
} from "./styled";

export const ActorCard = ({ actorId }) => {

  const movieActors = useSelector(moviesActorSelector);
  console.log("ActorCard", movieActors.results);
  const getActorDetails = (actorId) => {
    if (!Array.isArray(movieActors.results)) {
      console.error("actorDetails is not an array:", movieActors.results);
      return [];
    }

    const foundActor = movieActors.results.find((actor) => actor.id === actorId);

    return foundActor
      ? {
        actorName: foundActor.name,
        actorImage: foundActor.profile_path,
      }
      : { actorName: "Unknown", actorImage: "" };
  };

  const { actorName, actorImage } = getActorDetails(actorId);
  ;
  console.log("ActorCard", actorName, actorImage);


  return (
    <ActorCardContainer key={actorId}>
      <ActorImage
        src={actorImage ? `https://image.tmdb.org/t/p/w500${actorImage}` : "default-image.jpg"}
      />
      <ActorName>{actorName}</ActorName>
    </ActorCardContainer>
  );
};