
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
  ActorDetailsCointainer,
} from "./styled";

export const ActorCard = ({ name }) => {
  return (
    <ActorCardContainer>
      <ActorImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

      <ActorDetailsCointainer>
        <ActorName>{name = "Young FU"}</ActorName>
      </ActorDetailsCointainer>

    </ActorCardContainer>
  );
};