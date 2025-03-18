import { useDataAPI } from "../../../common/utils/useDataAPI";
import Loading from "../../../common/Loading";
import ErrorPage from "../../../common/ErrorPage";
import { Page } from "../Page";
import { movie } from "../data/movie";

export const MoviePage = () => {

  const { state, movieData } = useDataAPI();

  return (
    <>
      {state === "loading" ? (<Loading />)
        : state === "error" ? (<ErrorPage />)
          : (<Page movie={movie} movieData={movieData} />)}
    </>
  );
};