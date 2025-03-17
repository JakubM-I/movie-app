import {
  MovieCardContainer,
  MovieImage,
  MovieTitle,
  MovieYear,
  MovieGenreContainer,
  MovieGenre,
  MovieRatingContainer,
  MovieRating,
  MovieDetailsCointainer,
  Votes,
} from "./styled";

export const MovieCard = ({ movie, genres }) => {
  if (!movie || !movie.poster_path) {
    return null; 
  }

  return (
    <MovieCardContainer>
      <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <MovieDetailsCointainer>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{movie.release_date ? movie.release_date.split("-")[0] : "Brak daty"}</MovieYear>

        <MovieGenreContainer>
          {movie.genre_ids.length > 0 ? (
            movie.genre_ids.map((id) => (
              <MovieGenre key={id}>{genres[id] || "Unknown"}</MovieGenre>
            ))
          ) : (
            <MovieGenre>Brak gatunków</MovieGenre>
          )}
        </MovieGenreContainer>

        <MovieRatingContainer>
          <MovieRating>⭐️ {movie.vote_average.toFixed(1)}</MovieRating>
          <Votes>{movie.vote_count} votes</Votes>
        </MovieRatingContainer>
      </MovieDetailsCointainer>
    </MovieCardContainer>
  );
};
