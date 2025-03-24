import { PeopleWrapper, SubHeader } from "./styled";
import { PeopleList } from "./PeopleList";

export const People = ({ type, people }) => (
  <PeopleWrapper>
    <SubHeader>{type}</SubHeader>
    <PeopleList people={people} />
  </PeopleWrapper>
);