import { MovieTile, ImgSmall, Description } from "./styled";

export const Tile = ({ posterSmall, description }) => (
  <MovieTile>
    <ImgSmall src={posterSmall} alt="" />
    <Description> {description} </Description>
  </MovieTile>
);