
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer } from "./styled";
import { ActorCard } from "../ActorCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, setMovieSearching } from "../../moviesList/moviesSlice";
export const ActorsList = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  //console.log("MovieList", query);
  const dispatch = useDispatch();

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
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
        </ActorsListContainer>
        <Buttons />

      </PageContainer>
    </>
  );
}
