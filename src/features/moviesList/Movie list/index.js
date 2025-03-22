
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchQuerySelector, setMovieSearching } from "../moviesSlice";


export const MovieList = () => {
  const isMobile = console.log(window.innerWidth);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  const currentSearchQuery = useSelector(searchQuerySelector);

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(setMovieSearching(query))
    } else if (currentSearchQuery && query === "") {
      dispatch(fetchMovies())
    }
  }, [query, currentSearchQuery, dispatch])

  return (
    <>
      <PageContainer>
        <PageTitle title="Popular movies" />
        <MovieListContainer>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MovieListContainer>
        <Buttons />
      </PageContainer>
    </>
  );
}
