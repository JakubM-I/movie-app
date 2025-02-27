
import { Buttons } from "../Button";
import { PageTitle } from "../Header";

import {
  MovieCard,
  MovieImage,
  MovieListContainer,
  PageContainer,
  MovieTitle,
  MovieYear,
  MovieGenreContainer,
  MovieGenre,
  MovieRatingContainer,
  MovieRating,
  MovieDetailsCointainer,
  Votes,
} from "./styled";


export const MovieList = () => {

  return (
    <div>
      <PageContainer>
        <PageTitle title="Popular movies" />
        <MovieListContainer>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

          <MovieCard>
            <MovieImage src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" />

            <MovieDetailsCointainer>
              <MovieTitle>Mulan</MovieTitle>
              <MovieYear>2020</MovieYear>

              <MovieGenreContainer>
                <MovieGenre>Action</MovieGenre>
                <MovieGenre>Adventure</MovieGenre>
                <MovieGenre>Drama</MovieGenre>
              </MovieGenreContainer>
            </MovieDetailsCointainer>

            <MovieRatingContainer>
              <MovieRating>⭐️ 7.4</MovieRating>
              <Votes>35 votes</Votes>
            </MovieRatingContainer>

          </MovieCard>

        </MovieListContainer>




      </PageContainer>
      <Buttons />
    </div>


  );
}
