import { moviesGenreSelector } from "../moviesSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
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


export const MovieCard = ({ movieTitle, movieReleaseDate, movieVoteAverage, movieVoteCount, moviePosterPath, movieGenreId }) => {
  console.log(moviePosterPath);
  const movieGenres = useSelector(moviesGenreSelector);
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
      <MovieImage src={`https://image.tmdb.org/t/p/w500${moviePosterPath}`} />


      <MovieDetailsCointainer>
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
      </MovieDetailsCointainer>

    </MovieCardContainer>
  );
};