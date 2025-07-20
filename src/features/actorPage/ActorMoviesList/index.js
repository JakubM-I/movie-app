import { MoviesListWrapper, SubHeader } from "./styled";
import { MoviesList } from "./MoviesList";

export const ActorMoviesList = ({ title, movies }) => {
  return (
    <MoviesListWrapper>
      <SubHeader>{`${title}`}</SubHeader>
      <MoviesList movies={movies} />
    </MoviesListWrapper>
  );
};