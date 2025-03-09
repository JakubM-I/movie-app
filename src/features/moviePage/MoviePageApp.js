import { Page } from "./Page";
import { movies } from "./testData/movies";

function MoviePageApp() {

  const posterBig = movies.Top.PosterBig;
  const posterSmall = movies.Content.MovieTile.Poster;
  const description = movies.Content.MovieTile.MovieData.description;
  const title = movies.Content.MovieTile.MovieData.Title;
  const year = movies.Content.MovieTile.MovieData.Year;
  const production = movies.Content.MovieTile.MovieData.Production;
  const date = movies.Content.MovieTile.MovieData.Date;
  const typeCast = movies.Content.Cast.Title;
  const peopleCast = movies.Content.Cast.People;
  const typeCrew = movies.Content.Crew.Title;
  const peopleCrew = movies.Content.Crew.People;

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