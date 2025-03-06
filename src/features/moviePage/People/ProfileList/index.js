import { PeopleList, PersonTile, ImgPerson } from "./styled"

export const ProfileList = ({ people }) => (
  <PeopleList>
    {people.map(({ poster, name, character }) => (
      <PersonTile>
        <ImgPerson src={poster} alt="" />
        <dt>{name}</dt>
        <dt>{character}</dt>
      </PersonTile>
    ))}
  </PeopleList>
);