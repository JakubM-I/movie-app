import { PeopleList, PersonTile, ImgPerson, Name, Character } from "./styled"

export const ProfileList = ({ people }) => (
  <PeopleList>
    {people.map(({ poster, name, character }) => (
      <PersonTile>
        <ImgPerson src={poster} alt="" />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </PersonTile>
    ))}
  </PeopleList>
);