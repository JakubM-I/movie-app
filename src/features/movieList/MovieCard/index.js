import {
  MovieCardContainer,
  MovieImage,
  MovieTitle,
  MovieYear,
  MovieGenreContainer,
  MovieGenre,
  MovieRatingContainer,
  MovieRating,
  MovieDetailsContainer,
  Votes,
} from "./styled";

import useMovieDetails from "../../../common/utils/useApiData";

export const MovieCard = ({ movie }) => {

  const { title, vote_average, vote_count, release_date, poster_path } = useMovieDetails();

  if (!movie || !movie.poster_path) {
    return null;
  }

  return (
    <MovieCardContainer>

      <MovieImage
        src={movie.poster_path}
        alt={movie}
      />

      <MovieDetailsContainer>
        <MovieTitle>{title}</MovieTitle>

        <MovieYear>
          {movie.release_date ? movie.release_date.split("-")[0] : "Brak daty"}
        </MovieYear>

        {/* Gatunki filmowe */}
        <MovieGenreContainer>
          {movie.genre_ids.length > 0 ? (
            movie.genre_ids.map((id) => (
              <MovieGenre ></MovieGenre>
            ))
          ) : (
            <MovieGenre>Brak gatunków</MovieGenre>
          )}
        </MovieGenreContainer>

        {/* Ocena i liczba głosów */}
        <MovieRatingContainer>
          <MovieRating>⭐ {vote_average.toFixed(1)}</MovieRating>
          <Votes>{vote_count} głosów</Votes>
        </MovieRatingContainer>
      </MovieDetailsContainer>
    </MovieCardContainer>
  );
};
