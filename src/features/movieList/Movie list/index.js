
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";

export const MovieList = () => {
  const isMobile = console.log(window.innerWidth);
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
