import { useAPIData } from "../../../common/utils/useAPIData";
import Loading from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";

export const MoviePage = () => {

  const { state, movieData } = useAPIData();

  if (state === "loading") return <Loading />;
  if (state === "error") return <ErrorPage />
  return movieData;
}