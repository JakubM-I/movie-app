import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer } from "./styled";
import { ActorCard } from "../ActorCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setMovieSearching, moviesActorSelector } from "../../moviesList/moviesSlice";

export const ActorsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const dispatch = useDispatch();

  const actors = useSelector(moviesActorSelector);
  console.log("ActorsList", actors);

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
            <ActorCard
              key={m.id}
              actorId={m.id}
              actorName={m.name}
              actorImage={m.profile_path}
            />
          ))}

        </ActorsListContainer>
        <Buttons />
      </PageContainer>
    </>
  );
};