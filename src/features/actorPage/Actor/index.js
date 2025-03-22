import { useActorData } from "../useActorData";
import { ActorPageWrapper } from "./styled";
import { About } from "../About";
import { ActorMoviesList } from "../ActorMoviesList";

export const Actor = ({ actorBase, actorCredits }) => {

  const { image, name, birthday, place_of_birth, biography, moviesCast, moviesCrew
  } = useActorData({ actorBase, actorCredits });

  return (
    <ActorPageWrapper>
      <About
        image={image}
        name={name}
        biography={biography}
        birthday={birthday}
        place_of_birth={place_of_birth}
      />
      <ActorMoviesList title="Movies - cast(4)" movies={moviesCast} />
      <ActorMoviesList title="Movies - crew(4)" movies={moviesCrew} />
    </ActorPageWrapper>
  );
}
