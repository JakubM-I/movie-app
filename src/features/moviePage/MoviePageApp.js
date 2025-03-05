import { Page } from "./Page";
import { movies } from "./testData/movies";

function MoviePageApp() {

  const posterBig = movies.Top.PosterBig;
  const posterSmall = movies.Content.MovieTile.Poster;
  const description = movies.Content.MovieTile.MovieData.description;
  const title = movies.Content.MovieTile.MovieData.Title;
  const year = movies.Content.MovieTile.MovieData.Year;
  const produktion = movies.Content.MovieTile.MovieData.Production;
  const date = movies.Content.MovieTile.MovieData.Date;

  return (
    <Page posterBig={posterBig} posterSmall={posterSmall}
      description={description} title={title} year={year}
      produktion={produktion} date={date}
    />
  );
};

export default MoviePageApp;