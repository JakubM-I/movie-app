import {
  MovieTile,
  ImgSmall,
  MovieData,
  MovieTitle,
  MovieDescription,
} from "./styled";

export const Tile = ({ poster,
  description, title, year, production,
  date }) => (

  <MovieTile>
    <ImgSmall src={poster} alt="" />
    <MovieData>
      <MovieTitle>{title}</MovieTitle>
      <MovieDescription>{year}</MovieDescription>
      <MovieDescription>Production: {production}<br />Release date: {date}</MovieDescription>
      <MovieDescription>{description}</MovieDescription>
    </MovieData>
  </MovieTile>
);