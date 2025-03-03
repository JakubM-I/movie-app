import { MoviePage } from "./MoviePage";
import { movies } from "./testData/movies";

function MoviePageApp() {

  const posterBig = movies.Top.PosterBig;
  const posterSmall = movies.Content.MovieTile.Poster;
  const description = movies.Content.MovieTile.MovieData.description;

  return (
    <MoviePage
      posterBig={posterBig}
      posterSmall={posterSmall}
      description={description}
    />
  );
};

export default MoviePageApp;