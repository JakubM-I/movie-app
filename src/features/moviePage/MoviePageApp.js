import { DetailsPages } from "../../common/detailsPages/DetailsPages";
import { Movie } from "./Movie";
import { actions, selectors } from "./moviePageSlice";

const MoviePageApp = () => (
  <DetailsPages
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <Movie />
  </DetailsPages>
);

export default MoviePageApp;