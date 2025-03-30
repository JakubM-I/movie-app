import { useMovieDataAPI } from "./useMovieDataAPI";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/ErrorPage";
import { Movie } from "./Movie";

export const MoviePage = ({ id }) => {

  const { state, movieBase, movieImages, movieCredits } = useMovieDataAPI({ id });

  return (
    <>
      {state === "loading" ? (<Loading />)
        : state === "error" ? (<ErrorPage />)
          : (<Movie
            movieBase={movieBase}
            movieImages={movieImages}
            movieCredits={movieCredits}
          />)}
    </>
  );
};