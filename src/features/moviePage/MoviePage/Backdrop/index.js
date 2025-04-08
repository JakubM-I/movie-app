import { useSelector } from "react-redux";
import { selectors } from "../../moviePageSlice";
import { API_imageURL } from "../../../../common/detailsPages/API_imageURL";
import { Top, ImgBig, Vignette, Title } from "./styled";
import { Vote } from "../../../../common/detailsPages/Vote";

export const Backdrop = () => {

  const { images, ...base } = useSelector(selectors.selectDetails);

  return !!(images.backdrops.length > 0) && (
    <Top>
      <ImgBig src={`${API_imageURL}/${images.backdrops[0].file_path}`} alt="" />
      <Vignette >
        <Title>{base.title}</Title>
        <Vote
          vote={{
            average: base.vote_average,
            count: base.vote_count,
          }}
          backdrop
        />
      </Vignette>
    </Top >
  );
};