import { Wrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const MoviePage = ({
  posterBig, posterSmall, description, title,
  year, produktion, date }) => (
  <Wrapper>
    <Poster posterBig={posterBig} />
    <Tile
      posterSmall={posterSmall}
      title={title}
      year={year}
      description={description}
      produktion={produktion}
      date={date} />
    <People title="Coast" />
    <People title="Crew" />
  </Wrapper>
);