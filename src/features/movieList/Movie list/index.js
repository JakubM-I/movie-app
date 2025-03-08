
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";


export const MovieList = () => {

  return (
    <div>
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

      </PageContainer>
      <Buttons />
    </div>
  );
}
