
import {
  ActorCardContainer,
  ActorImage,
  ActorName,
} from "./styled";

export const ActorCard = () => {
  return (
    <ActorCardContainer>
      <ActorImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />
      <ActorName>Yeng </ActorName>
    </ActorCardContainer>
  );
};