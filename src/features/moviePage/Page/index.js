import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Page = ({ movie, movieBase, movieImages, moviePeople }) => {

  const posterBig = "https://image.tmdb.org/t/p/original" + movieImages.backdrops[1].file_path;
  const posterSmall = "https://image.tmdb.org/t/p/original" + movieImages.posters[16].file_path;
  const description = movieBase.overview;
  const title = movieBase.title;
  const year = movie.Content.MovieTile.MovieData.Year;
  const production = movie.Content.MovieTile.MovieData.Production;
  const date = movieBase.release_date;
  const cast = moviePeople.cast.slice(0, 12);
  const crew = moviePeople.crew.slice(0, 12);

  console.log(crew)

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
      <People type="Cast" people={cast} />
      <People type="Crew" people={crew} />
    </PageWrapper>
  )
};