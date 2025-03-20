import { PersonTileList, PersonTile, ImgPerson, Name, Character } from "./styled"
import person from "../../data/images/person.png";

export const PeopleList = ({ people }) => (
  <PersonTileList>
    {people.map(({ id, profile_path, name, character, job }) => {

      if (profile_path === null) { profile_path = person; }
      else { profile_path = "https://image.tmdb.org/t/p/original" + profile_path; }

      if (character === undefined) character = job;

      return (
        <PersonTile key={id}>
          <ImgPerson src={profile_path} alt="" />
          <Name>{name}</Name>
          <Character>{character}</Character>
        </PersonTile>
      )
    })}
  </PersonTileList>
);