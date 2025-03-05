import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Page = ({
  posterBig, posterSmall, description, title,
  year, produktion, date }) => (
  <PageWrapper>
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
  </PageWrapper>
);