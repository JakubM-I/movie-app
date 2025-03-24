
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageSelector, fetchMovies, moviesSelector, searchQuerySelector, setMovieSearching, totalPagesSelector } from "../moviesSlice";


export const MovieList = () => {
  // const isMobile = console.log(window.innerWidth);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  console.log("MovieList", query);
  const dispatch = useDispatch();
  const currentSearchQuery = useSelector(searchQuerySelector);
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const movie = useSelector(moviesSelector);
  console.log(movie);

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(setMovieSearching(query))
    } else {
      dispatch(fetchMovies())
    }
  }, [query])

  return (
    <>
      <PageContainer>
        <PageTitle title={`${query ? `Result for: ${query}` : "Popular movies"}`} />
        <div>
          <ul>
            {movie.map(movie =>
              <li key={movie.id}>{movie.title}</li>
            )}
          </ul>
          <p>Page: {currentPage}</p>
          <p>Number of pages: {totalPages}</p>
        </div>
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
