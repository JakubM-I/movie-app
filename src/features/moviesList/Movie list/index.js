
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, MovieListContainer } from "./styled";
import { MovieCard, } from "../MovieCard";
import { Link } from "react-router-dom";

export const MovieList = () => {

  return (
    <>
      <PageContainer >
        <PageTitle title="Popular movies" />
        <MovieListContainer>
          <Link to={"/movie/11"}>
            <MovieCard />
          </Link>

          {/* <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard /> */}
        </MovieListContainer>
        <Buttons />
      </PageContainer>
    </>
  );
}
