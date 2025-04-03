import { useMovieData } from "../useMovieData";
import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Movie = ({ movieBase, movieImages, movieCredits }) => {

  const { posterBig, posterSmall, title, year, description, production, date, cast, crew
  } = useMovieData({ movieBase, movieImages, movieCredits });

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