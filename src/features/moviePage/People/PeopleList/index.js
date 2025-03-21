import { PersonTileList, PersonTile, ImgPerson, Name, Character } from "./styled"
import { imageURL } from "../../../../common/utils/imageURL";
import emptyImage from "../../movieImages/emptyImage.png";


export const PeopleList = ({ people }) => (
  <PersonTileList>
    {people.map(({ id, profile_path, name, character, job }) => {

      if (profile_path === null) { profile_path = emptyImage; }
      else { profile_path = `${imageURL}/${profile_path}` };

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