import { Top } from "./styled";
import { ImgBig } from "./styled";

export const Poster = ({ backdrop }) => (
  <Top>
    <ImgBig src={backdrop} alt="" />
  </Top>
);