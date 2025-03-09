import { PageWrapper } from "./styled";
import { Poster } from "../Poster";
import { Tile } from "../Tile";
import { People } from "../People";

export const Page = ({
  posterBig, posterSmall, description, title,
  year, production, date, typeCast, peopleCast, typeCrew, peopleCrew }) => (
  <PageWrapper>
    <Poster posterBig={posterBig} />
    <Tile
      posterSmall={posterSmall}
      title={title}
      year={year}
      description={description}
      production={production}
      date={date} />
    <People type={typeCast} people={peopleCast} />
    <People type={typeCrew} people={peopleCrew} />
  </PageWrapper>
);