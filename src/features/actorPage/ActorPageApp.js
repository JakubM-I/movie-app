import { useEffect } from "react";
import { DetailsPages } from "../../common/detailsPages/DetailsPages";
import { setSearching, fetchMovies, moviesActorSelector, loadingSelector } from "../moviesList/moviesSlice";
import { ActorPage } from "./ActorPage";
import { actions, selectors } from "./actorPageSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActorsListContainer, PageContainer, StyledLink } from "../actorsList/ActorsList/styled";
import Loading from "../../common/Loading";
import { PageTitle } from "../../common/PageHeader";
import NoResults from "../../common/NoResults";
import { Buttons } from "../../common/Buttons";
import { ActorCard } from "../actorsList/ActorCard";

const ActorPageApp = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actors = useSelector(moviesActorSelector);
  const isLoading = useSelector(loadingSelector);

    useEffect(() => {
    if (query && query.length > 0) {
      navigate(`/actors?search=${query}`);
      dispatch(setSearching({ query, isActorsPage: true }))
    } else {

      dispatch(setSearching({ query: "", isActorsPage: true }))
      dispatch(fetchMovies())
    }
  }, [query])

  return (
    <>
      {query && query.length > 0 ?
      (      
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
      </PageContainer>)
      :
      (    
        <DetailsPages
          statusSelector={selectors.selectStatus}
          fetchAction={actions.fetch}
          clearAction={actions.clear}
        >
          <ActorPage />
        </DetailsPages>
      )}
    </>
  )
};

export default ActorPageApp;