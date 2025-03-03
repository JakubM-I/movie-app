import { MoviePage } from "./MoviePage";
import { movies } from "./testData/movies";

function MoviePageApp() {

  const posterBig = movies.Top.PosterBig;
  const posterSmall = movies.Content.MovieTile.Poster;
  const description = movies.Content.MovieTile.MovieData.description;
  const title = movies.Content.MovieTile.MovieData.Title;
  const year = movies.Content.MovieTile.MovieData.Year;

  return (
    <MoviePage
      posterBig={posterBig}
      posterSmall={posterSmall}
      description={description}
      title={title}
      year={year}
    />
  );
};

export default MoviePageApp;