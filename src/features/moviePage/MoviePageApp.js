import { Page } from "./Page";
import { movie } from "./data/movie";
import { MoviePage } from "./MoviePage";

function MoviePageApp() {

  const movieData = MoviePage();

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
    <Page posterBig={posterBig} posterSmall={posterSmall}
      description={description} title={title} year={year}
      production={production} date={date}
      typeCast={typeCast} peopleCast={peopleCast}
      typeCrew={typeCrew} peopleCrew={peopleCrew}
    />
  );
};

export default MoviePageApp;