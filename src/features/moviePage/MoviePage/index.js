import { Wrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";

export const MoviePage = ({ posterBig, posterSmall, description, title, year }) => (
  <Wrapper>
    <Poster posterBig={posterBig} />
    <Tile
      posterSmall={posterSmall}
      title={title}
      year={year}
      description={description} />
  </Wrapper>
);