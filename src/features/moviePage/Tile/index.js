import {
  MovieTile,
  Poster,
  MovieData,
  MovieTitle,
  MovieYear,
  MovieDescription,
} from "./styled";
import { MetaData } from "../../../common/detailsPages/MetaData";
import { Tags } from "../../../common/detailsPages/Tags";
import { Vote } from "../../../common/detailsPages/Vote";

export const Tile = ({ poster,
  description, title, year, metaData,
  tags, vote }) => (

  <MovieTile>
    <Poster url={poster} />
    <MovieData>
      <MovieTitle>{title}</MovieTitle>
      <MovieYear>{year}</MovieYear>
      <MetaData metaData={metaData} />
      <Tags tags={tags} />
      <Vote vote={vote} />
    </MovieData>
    <MovieDescription>{description}</MovieDescription>
  </MovieTile>
);