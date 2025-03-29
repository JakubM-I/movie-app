import { useSelector } from "react-redux";
import { selectors } from "../moviePageSlice";
// import { useMovieData } from "../useMovieData";
import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Movie = () => {

  // const movieData = useSelector(selectors.selectDetails);
  // const { base, images, cast, crew } = movieData;

  /* const { posterBig, posterSmall, title, year, description, production, date, cast, crew
  } = useMovieData({ movieBase, movieImages, movieCredits }); */

  return (
    <PageWrapper>
      JEST DOBRZE
      {/* <Poster posterBig={posterBig} />
      <Tile
        posterSmall={posterSmall}
        title={title}
        year={year}
        description={description}
        production={production}
        date={date} />
      <People type="Cast" people={cast} />
      <People type="Crew" people={crew} /> */}
    </PageWrapper>
  )
};