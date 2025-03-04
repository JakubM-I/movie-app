import {
  MovieTile,
  ImgSmall,
  MovieData,
  MovieTitle,
  MovieDescription,
} from "./styled";

export const Tile = ({ posterSmall,
  description, title, year, produktion,
  date }) => (

  <MovieTile>
    <ImgSmall src={posterSmall} alt="" />
    <MovieData>
      <MovieTitle>{title}</MovieTitle>
      <MovieDescription>{year}</MovieDescription>
      <MovieDescription>Production: {produktion}<br />Release date: {date}</MovieDescription>
      <MovieDescription>{description}</MovieDescription>
    </MovieData>
  </MovieTile>
);