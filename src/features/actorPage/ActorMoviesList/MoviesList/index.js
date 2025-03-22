import {
  MoviesTileList, MovieTile, ImgMovie, MovieTitle, MovieYear
} from "./styled";
import emptyImage from "../../../moviePage/movieImages/emptyImage.png";
import { imageURL } from "../../../../common/utils/imageURL";

export const MoviesList = ({ movies }) => (
  <MoviesTileList>
    {movies.map(({ credit_id, poster_path, title, release_date }) => {

      if (poster_path === null) { poster_path = emptyImage; }
      else { poster_path = `${imageURL}/${poster_path}` };

      return (
        <MovieTile key={credit_id}>
          <ImgMovie src={poster_path} alt="" />
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{release_date}</MovieYear>
        </MovieTile>
      )
    })}
  </MoviesTileList>
);