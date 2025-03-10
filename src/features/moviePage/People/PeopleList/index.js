import { PersonTileList, PersonTile, ImgPerson, Name, Character } from "./styled"

export const PeopleList = ({ people }) => (
  <PersonTileList>
    {people.map(({ id, poster, name, character }) => (
      <PersonTile key={id}>
        <ImgPerson src={poster} alt="" />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </PersonTile>
    ))}
  </PersonTileList>
);