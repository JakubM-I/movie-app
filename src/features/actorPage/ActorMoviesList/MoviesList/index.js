import {
  MoviesTileList,
  MovieTile,
  ImgMovie,
  MovieTitle,
  MovieYear
} from "./styled"

export const MoviesList = ({ movies }) => (
  <MoviesTileList>
    {movies.map(({ id, Poster, Description }) => (
      <MovieTile key={id}>
        <ImgMovie src={Poster} alt="" />
        <MovieTitle>{Description.Name}</MovieTitle>
        <MovieYear>{Description.Year}</MovieYear>
      </MovieTile>
    ))}
  </MoviesTileList>
);