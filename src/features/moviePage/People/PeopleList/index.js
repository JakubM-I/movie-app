import { PersonTileList, PersonTile, ImgPerson, Name, Character } from "./styled"

export const PeopleList = ({ people }) => (
  <PersonTileList>
    {people.map(({ poster, name, character }) => (
      <PersonTile>
        <ImgPerson src={poster} alt="" />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </PersonTile>
    ))}
  </PersonTileList>
);