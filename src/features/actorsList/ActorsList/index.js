
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer, StyledLink } from "./styled";
import { ActorCard } from "../ActorCard";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setMovieSearching,
  moviesActorSelector,
  setNextPage,
  setPreviousPage,
  setFirstPage,
  setLastPage,
  totalPagesSelector,
  currentPageSelector
} from "../../moviesList/moviesSlice";

export const ActorsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();

  const actors = useSelector(moviesActorSelector);
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);

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
        <Buttons
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={() => dispatch(setNextPage())}
          onPreviousPage={() => dispatch(setPreviousPage())}
          onFirstPage={() => dispatch(setFirstPage())}
          onLastPage={() => dispatch(setLastPage())}
        />

      </PageContainer>
    </>
  );
}
