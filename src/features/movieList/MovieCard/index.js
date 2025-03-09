
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

export const MovieCard = () => {
  return (
    <MovieCardContainer>
      <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

      <MovieDetailsCointainer>
        <MovieTitle>Mulan</MovieTitle>
        <MovieYear>2020</MovieYear>

        <MovieGenreContainer>
          <MovieGenre>Action</MovieGenre>
          <MovieGenre>Adventure</MovieGenre>
          <MovieGenre>Drama</MovieGenre>
        </MovieGenreContainer>

        <MovieRatingContainer>
          <MovieRating>⭐️ 7.4</MovieRating>
          <Votes>35 votes</Votes>
        </MovieRatingContainer>
      </MovieDetailsCointainer>



    </MovieCardContainer>
  );
};