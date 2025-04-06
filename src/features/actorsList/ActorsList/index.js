import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer, StyledLink } from "./styled";
import { ActorCard } from "../ActorCard";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setSearching,
  moviesActorSelector,
  setNextPage,
  setPreviousPage,
  setFirstPage,
  setLastPage,
  totalPagesSelector,
  currentPageSelector,
  isSearchingSelector,
  loadingSelector,
  isActorsPageSelector
} from "../../moviesList/moviesSlice";
import NoResults from "../../../common/NoResults";
import Loading from "../../../common/Loading";

export const ActorsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();

  const actors = useSelector(moviesActorSelector);
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const isSearching = useSelector(isSearchingSelector);
  const isLoading = useSelector(loadingSelector);
  const isActorsPage = useSelector(isActorsPageSelector);


  useEffect(() => {

    dispatch(setSearching({ query: "", isActorsPage: true }));
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(setSearching({ query, isActorsPage: true }))
    } else {

      dispatch(setSearching({ query: "", isActorsPage: true }))
      dispatch(fetchMovies())
    }
  }, [query])


  return (
    <>
      <PageContainer>
        {isLoading ? (
          <Loading />
        ) : actors.length > 0 ? (
          <>
            <PageTitle title={`${query ? `Result for: ${query}` : "Popular people"}`} />
            <ActorsListContainer>

              {Array.isArray(actors) && actors.map(m => (
                <StyledLink to={`actor/${m.id}`}>
                  <ActorCard
                    key={m.id}
                    actorId={m.id}
                    actorName={m.name}
                    actorImage={m.profile_path}
                  />
                </StyledLink>
              ))}

            </ActorsListContainer>
          </>

        ) : (<NoResults query={query} />)}

        <Buttons />

      </PageContainer>
    </>
  );
}
