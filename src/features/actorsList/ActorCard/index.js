import { useSelector, useDispatch } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
  ActorDetailsCointainer,
} from "./styled";

export const ActorCard = () => {
  const dispatch = useDispatch();
  const moviesActor = useSelector(moviesActorSelector);

  const actorDetails = moviesActor?.results || [];
  const currentPage = moviesActor?.page || 1; // Pobierz aktualną stronę z Redux
  const actor2 = useSelector(moviesActorSelector);

  useEffect(() => {
    dispatch(fetchActors(currentPage)); // Wywołaj akcję pobierania aktorów
  }, [dispatch, currentPage]);

  const getActorDetails = (actorDetails) => {
    if (!Array.isArray(actorDetails)) {
      console.error("actorDetails is not an array:", actorDetails);
      return [];
    }
    return actorDetails.map((actor) => {
      const foundActor = actorDetails.find((a) => a.id === actor.id);
      return foundActor
        ? {
          actorId: foundActor.id,
          actorName: foundActor.name,
          actorImage: foundActor.profile_path,
        }
        : { actorId: null, actorName: "Unknown", actorImage: "" };
    });
  };

  const actors = getActorDetails(actorDetails);
  console.log(actors);
  return (

    <>
      {actor.map(({ actorId, actorName, actorImage }) => (
        <ActorCardContainer key={actorId}>
          <ActorImage
            src={actorImage ? `https://image.tmdb.org/t/p/w500${actorImage}` : "default-image.jpg"}
          />
          <ActorName>{actorName}</ActorName>
        </ActorCardContainer>
      ))}
    </>

  );
};