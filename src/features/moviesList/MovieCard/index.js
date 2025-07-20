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
  MovieStar,
} from "./styled";
import emptyImage from "../../../common/detailsPages/emptyImage.png";
export const MovieCard = ({ movieTitle, movieReleaseDate, movieVoteAverage, movieVoteCount, moviePosterPath, movieGenreId }) => {


  const movieGenres = useSelector(moviesGenreSelector);
  const getMovieGenres = (movieGenres, movieGenreId) => {

    if (!Array.isArray(movieGenres.genres) || movieGenres.genres.length === 0) {
      console.error('movieGenres is not an array:', movieGenres);
      return [];
    }

    return movieGenreId?.map(id => {
      const genre = movieGenres.genres.find((g) => g.id === id);
      return genre ? genre.name : "Unknown";
    });
  };

  const genreNames = getMovieGenres(movieGenres, movieGenreId);
  const year = new Date(movieReleaseDate).getFullYear();

  return (
    <MovieCardContainer>
      <MovieImage
        src={moviePosterPath ? `https://image.tmdb.org/t/p/w500${moviePosterPath}` : emptyImage}
        alt={movieTitle}
      />

      <MovieDetailsContainer>
        <MovieTitle>{movieTitle}</MovieTitle>
        <MovieYear>{year}</MovieYear>

        <MovieGenreContainer>
          {Array.isArray(genreNames) && genreNames.slice(0, 4).map((genre, index) => (
            <MovieGenre key={index}>{genre}</MovieGenre>
          ))}
        </MovieGenreContainer>

        <MovieRatingContainer>
          {(movieVoteCount > 0) ? 
            (
              <>
                <MovieStar />
                <MovieRating> {(movieVoteAverage !== null && movieVoteAverage !== undefined) ? movieVoteAverage.toFixed(1) : "No votes"}</MovieRating>
                <Votes>{(movieVoteCount !== null && movieVoteCount !== undefined) ? `${movieVoteCount} votes` : "No votes"}</Votes>
              </>
            ) 
            : 
            (<Votes>No votes yet</Votes>)}

        </MovieRatingContainer>
      </MovieDetailsContainer>
    </MovieCardContainer>
  );
}