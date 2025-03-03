import { Wrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";

export const MoviePage = ({ posterBig, posterSmall, description }) => (
  <Wrapper>
    <Poster posterBig={posterBig} />
    <Tile posterSmall={posterSmall} description={description} />
  </Wrapper>
);