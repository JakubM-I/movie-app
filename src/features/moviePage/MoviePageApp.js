import { Page } from "./Page";
import { movie } from "./movieAPI/dataAPI/movie";
import { MovieAPI } from "./movieAPI";

function MoviePageApp() {

  MovieAPI();
  const data = JSON.parse(localStorage.getItem("movie"));
  // console.log(data.poster_path);

  const posterBig = "https://image.tmdb.org/t/p/original" + data.poster_path;
  // const posterBig = movie.Top.PosterBig;
  const posterSmall = movie.Content.MovieTile.Poster;
  const description = data.overview;
  // const description = movie.Content.MovieTile.MovieData.description;
  const title = movie.Content.MovieTile.MovieData.Title;
  const year = movie.Content.MovieTile.MovieData.Year;
  const production = movie.Content.MovieTile.MovieData.Production;
  const date = movie.Content.MovieTile.MovieData.Date;
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