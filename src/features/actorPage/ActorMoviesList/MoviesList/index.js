import { useSelector } from "react-redux";
import { moviesGenreSelector } from "../../../moviesList/moviesSlice";
import {
  MoviesTileList, MovieTile, ImgMovie, MovieInfo, MovieTitle, MovieYear
} from "./styled";
import emptyImage from "../../../../common/detailsPages/emptyImage.png";
import { API_imageURL } from "../../../../common/detailsPages/API_imageURL";
import { Tags } from "../../../../common/detailsPages/Tags";
import { Vote } from "../../../../common/detailsPages/Vote";

export const MoviesList = ({ movies }) => {

  const genres = useSelector(moviesGenreSelector).genres;
  // const genreName = (i, t) => t.find((e) => e.id === i).name;

  return (
    <MoviesTileList>
      {movies.map(({ genre_ids, credit_id, poster_path, title, release_date,
        character, job, vote_average, vote_count }) => {

        if (poster_path === null) { poster_path = emptyImage; }
        else { poster_path = `${API_imageURL}/${poster_path}` };

        if (character === undefined) character = job;

        return (
          <MovieTile key={credit_id}>
            <ImgMovie src={poster_path} alt="" />
            <MovieInfo>
              <MovieTitle>{title}</MovieTitle>
              <MovieYear>{`${character} (${new Date(release_date).getFullYear()})`}</MovieYear>

              <Tags
                tags={genre_ids?.map(id => genres.find(e => e.id === id).name)}
                small
              />

              <Vote
                vote={{
                  average: vote_average,
                  count: vote_count,
                }}
              />
            </MovieInfo>
          </MovieTile>
        )
      })}
    </MoviesTileList>
  );
};