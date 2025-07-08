import { useSearchParams } from "react-router-dom";
import { DetailsPages } from "../../common/detailsPages/DetailsPages";
import { MoviePage } from "./MoviePage";
import { actions, selectors } from "./moviePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, isSearchingSelector, loadingSelector, moviesSelector, setSearching } from "../moviesList/moviesSlice";
import { useEffect } from "react";
import { MovieListContainer, PageContainer, StyledLink } from "../moviesList/Movie list/styled";
import Loading from "../../common/Loading";
import { PageTitle } from "../../common/PageHeader";
import { MovieCard } from "../moviesList/MovieCard";
import { Buttons } from "../../common/Buttons";
import NoResults from "../../common/NoResults";

const MoviePageApp = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  const isSearching = useSelector(isSearchingSelector);
  const movie = useSelector(moviesSelector);
  const isLoading = useSelector(loadingSelector);

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(setSearching({ query, isActorsPage: false }))
    } else {
      dispatch(setSearching({ query: "", isActorsPage: false }))
      dispatch(fetchMovies())
    }
  }, [query])



  return (
    <>
      {query && query.length > 0 ? 
        (      <PageContainer>
        {isLoading ? (
          <Loading />
        ) : movie.length > 0 ? (
          <>
            <PageTitle title={`${query ? `Result for: ${query}` : "Popular movies"}`} />

            <MovieListContainer>

              {Array.isArray(movie) && movie.map(m => (
                <StyledLink to={`movie/${m.id}` } key={m.id}>
                  <MovieCard
                    key={m.id}
                    movieTitle={m.title}
                    movieReleaseDate={m.release_date}
                    movieVoteAverage={m.vote_average}
                    movieVoteCount={m.vote_count}
                    moviePosterPath={m.poster_path}
                    movieGenreId={m.genre_ids}
                  />
                </StyledLink>

              ))}

            </MovieListContainer>
            <Buttons />
          </>
        ) : (<NoResults query={query} />)}

      </PageContainer>) 
        : 
        (  <DetailsPages
    statusSelector={selectors.selectStatus}
    fetchAction={actions.fetch}
    clearAction={actions.clear}
  >
    <MoviePage />
  </DetailsPages>)
        }
    </>
)
};

export default MoviePageApp;