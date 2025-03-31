import { useSelector } from "react-redux";
import { selectors } from "../moviePageSlice";
import { API_imageURL } from "../../../common/detailsPages/API_imageURL";
import emptyImage from "../movieImages/emptyImage.png";
import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";


const imageFromAPI = data => {
  if (data.length > 0) return `${API_imageURL}/${data[0].file_path}`;
  return emptyImage;
};

export const Movie = () => {

  const { images, credits, ...base } = useSelector(selectors.selectDetails);

  const backdrop = imageFromAPI(images.backdrops);
  const poster = imageFromAPI(images.posters);

  const description = base.overview;
  const title = base.title;
  const production = "Poland, UK, France";
  const date = new Date(base.release_date).toLocaleDateString();
  const year = new Date(base.release_date).getFullYear();

  const cast = credits.cast;
  const crew = credits.crew;

  return (
    <PageWrapper>
      <Poster backdrop={backdrop} />
      <Tile
        poster={poster}
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