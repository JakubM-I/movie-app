import { MoviesListWrapper, SubHeader } from "./styled";
import { MoviesList } from "./MoviesList";

export const ActorMoviesList = ({ title, movies }) => (
  <MoviesListWrapper>
    <SubHeader>{title}</SubHeader>
    <MoviesList movies={movies} />
  </MoviesListWrapper>
);