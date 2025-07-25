import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer, StyledLink } from "./styled";
import { ActorCard } from "../ActorCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setSearching,
  moviesActorSelector,
  loadingSelector
} from "../../moviesList/moviesSlice";
import NoResults from "../../../common/NoResults";
import Loading from "../../../common/Loading";

export const ActorsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  const actors = useSelector(moviesActorSelector);
  const isLoading = useSelector(loadingSelector);



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
              {Array.isArray(actors) && actors.map(actor => (
                <StyledLink to={`/actors/actor/${actor.id}`} key={actor.id}>
                  <ActorCard
                    actorId={actor.id}
                    actorName={actor.name}
                    actorProfilePath={actor.profile_path}
                  />
                </StyledLink>
              ))}
            </ActorsListContainer>
             <Buttons />
          </>
        ) : (<NoResults query={query} />)}

      </PageContainer>
    </>
  );
}
