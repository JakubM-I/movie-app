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

import useMovieDetails from "../../../common/utils/useApiData";

export const MovieCard = () => {

  const { title, vote_average, vote_count, release_date, poster_path, genre_ids, id, name } = useMovieDetails();

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/300";

  return (
    <MovieCardContainer>

      <MovieImage
        src={imageUrl}
        alt={title}
      />

      <MovieDetailsContainer>
        <MovieTitle>{title}</MovieTitle>

        <MovieYear>
          {release_date ? release_date.split("-")[0] : "Brak daty"}
        </MovieYear>


        <MovieGenreContainer>
          {genre_ids?.length > 0 ? (
            genre_ids?.map((name, index) => (
              <MovieGenre key={index}>{name}</MovieGenre>
            ))
          ) : (
            <MovieGenre>Brak gatunków</MovieGenre>
          )}
        </MovieGenreContainer>

        {/* Ocena i liczba głosów */}
        <MovieRatingContainer>
          <MovieRating>⭐ {vote_average?.toFixed(1)}</MovieRating>
          <Votes>{vote_count} głosów</Votes>
        </MovieRatingContainer>
      </MovieDetailsContainer>
    </MovieCardContainer>
  );
};