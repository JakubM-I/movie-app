import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Page = ({ movie, movieData }) => {

  const posterBig = "https://image.tmdb.org/t/p/w342" + movieData.poster_path;
  // const posterBig = movie.Top.PosterBig;
  const posterSmall = "https://image.tmdb.org/t/p/original" + movieData.backdrop_path;
  // const posterSmall = movie.Content.MovieTile.Poster;
  const description = movieData.overview;
  // const description = movie.Content.MovieTile.MovieData.description;
  const title = movieData.title;
  // const title = movie.Content.MovieTile.MovieData.Title;
  const year = movie.Content.MovieTile.MovieData.Year;
  const production = movie.Content.MovieTile.MovieData.Production;
  const date = movieData.release_date;
  // const date = movie.Content.MovieTile.MovieData.Date;
  const typeCast = movie.Content.Cast.Title;
  const peopleCast = movie.Content.Cast.People;
  const typeCrew = movie.Content.Crew.Title;
  const peopleCrew = movie.Content.Crew.People;


  return (
    <PageWrapper>
      <Poster posterBig={posterBig} />
      <Tile
        posterSmall={posterSmall}
        title={title}
        year={year}
        description={description}
        production={production}
        date={date} />
      <People type={typeCast} people={peopleCast} />
      <People type={typeCrew} people={peopleCrew} />
    </PageWrapper>
  )
};