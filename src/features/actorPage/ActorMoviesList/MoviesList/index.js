import {
  MoviesTileList, MovieTile, ImgMovie, MovieTitle, MovieYear
} from "./styled";
import emptyImage from "../../../moviePage/movieImages/emptyImage.png";
import { API_imageURL } from "../../../../common/detailsPages/detailsfetchFromAPI";

export const MoviesList = ({ movies }) => (
  <MoviesTileList>
    {movies.map(({ credit_id, poster_path, title, release_date,
      character, job }) => {

      if (poster_path === null) { poster_path = emptyImage; }
      else { poster_path = `${API_imageURL}/${poster_path}` };

      if (character === undefined) character = job;

      return (
        <MovieTile key={credit_id}>
          <ImgMovie src={poster_path} alt="" />
          <MovieTitle>{title}</MovieTitle>
          <MovieYear>{`${character} (${release_date.slice(0, 4)})`}</MovieYear>
        </MovieTile>
      )
    })}
  </MoviesTileList>
);