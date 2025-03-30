
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
} from "./styled";
import { useSelector } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";

export const ActorCard = () => {

  const moviesActor = useSelector(moviesActorSelector);
  console.log(moviesActor);
  // const getMovieGenres = (moviesActor, moviesActorId) => {
  return (
    <ActorCardContainer>
      <ActorImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
      <ActorName>Yeng </ActorName>
    </ActorCardContainer>
  );
};