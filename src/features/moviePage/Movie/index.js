import { useSelector } from "react-redux";
import { selectors } from "../moviePageSlice";
import { API_imageURL } from "../../../common/detailsPages/API_imageURL";
import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Movie = () => {

  const { images, credits, ...base } = useSelector(selectors.selectDetails);

  const posterBig = `${API_imageURL}/${images.backdrops[1].file_path}`;
  const posterSmall = `${API_imageURL}/${images.posters[16].file_path}`;
  const description = base.overview;
  const title = base.title;
  const production = "Poland, UK, France";
  const date = base.release_date;
  const cast = credits.cast;
  const crew = credits.crew;
  const year = new Date(date).getFullYear();


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