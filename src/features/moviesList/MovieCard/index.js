import { moviesGenreSelector } from "../moviesSlice";
import { useSelector } from "react-redux";
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
import emptyImage from "../../moviePage/movieImages/emptyImage.png";

export const MovieCard = ({ movieTitle, movieReleaseDate, movieVoteAverage, movieVoteCount, moviePosterPath, movieGenreId }) => {


  const movieGenres = useSelector(moviesGenreSelector);
  console.log("movieGenres", movieGenres.genres);
  const getMovieGenres = (movieGenres, movieGenreId) => {

    if (!Array.isArray(movieGenres.genres)) {
      console.error('movieGenres is not an array:', movieGenres);
      return [];
    }

    return movieGenreId?.map(id => {
      const genre = movieGenres.genres.find((g) => g.id === id);
      return genre ? genre.name : "Unknown";
    });
  };

  const genreNames = getMovieGenres(movieGenres, movieGenreId);


  return (
    <MovieCardContainer>
      <MovieImage src={moviePosterPath ? `https://image.tmdb.org/t/p/w500${moviePosterPath}` : emptyImage} />

      <MovieDetailsContainer>
        <MovieTitle>{movieTitle}</MovieTitle>
        <MovieYear>{movieReleaseDate}</MovieYear>

        <MovieGenreContainer>
          {genreNames.slice(0, 4).map((genre, index) => (
            <MovieGenre key={index}>{genre}</MovieGenre>
          ))}
        </MovieGenreContainer>

        <MovieRatingContainer>
          <MovieRating>⭐️ {movieVoteAverage.toFixed(1)}</MovieRating>

          <Votes>{movieVoteCount} votes</Votes>
        </MovieRatingContainer>
      </MovieDetailsContainer>
    </MovieCardContainer>
  );
}
