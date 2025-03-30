
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
  ActorDetailsCointainer,
} from "./styled";
import { useSelector } from "react-redux";
import { moviesActorSelector } from "../../moviesList/moviesSlice";

export const ActorCard = () => {

  const moviesActor = useSelector(moviesActorSelector);
  console.log(moviesActor);



  return (
    <ActorCardContainer>
      <ActorImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

      <ActorDetailsCointainer>
        <ActorName>{name = "Young FU"}</ActorName>
      </ActorDetailsCointainer>

    </ActorCardContainer>
  );
};