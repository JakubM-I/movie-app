import {
  MovieTile,
  ImgSmall,
  MovieData,
  MovieTitle,
  MovieDescription,
} from "./styled";

export const Tile = ({ posterSmall, description, title, year }) => (
  <MovieTile>
    <ImgSmall src={posterSmall} alt="" />
    <MovieData>
      <MovieTitle> {title} </MovieTitle>
      <MovieDescription> {year} </MovieDescription>
      <MovieDescription> {description} </MovieDescription>
    </MovieData>
  </MovieTile>
);