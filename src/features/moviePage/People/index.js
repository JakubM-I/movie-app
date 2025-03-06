import { PeopleWrapper, SubHeader } from "./styled";
import { ProfileList } from "./ProfileList";

export const People = ({ type, people }) => (
  <PeopleWrapper>
    <SubHeader>{type}</SubHeader>
    <ProfileList people={people} />
  </PeopleWrapper>
);