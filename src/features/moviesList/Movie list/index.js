
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageSelector, fetchMovies, moviesSelector, moviesGenreSelector, searchQuerySelector, setMovieSearching, totalPagesSelector } from "../moviesSlice";


export const MovieList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  //console.log("MovieList", query);
  const dispatch = useDispatch();
  const currentSearchQuery = useSelector(searchQuerySelector);
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const movie = useSelector(moviesSelector);

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
        <MovieListContainer>

          {movie.map(m => (
            <MovieCard
              key={m.id}
              movieTitle={m.title}
              movieReleaseDate={m.release_date}
              movieVoteAverage={m.vote_average}
              movieVoteCount={m.vote_count}
              moviePosterPath={m.poster_path}
              movieGenreId={m.genre_ids}
            />
          ))}

        </MovieListContainer>
        <Buttons />
      </PageContainer>
    </>
  );
}
