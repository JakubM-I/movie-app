import { imageURL } from "../../common/utils/imageURL";

export const useMovieData = ({ movieBase, movieImages, movieCredits }) => {

  const posterBig = `${imageURL}/${movieImages.backdrops[1].file_path}`;
  const posterSmall = `${imageURL}/${movieImages.posters[16].file_path}`;
  const description = movieBase.overview;
  const title = movieBase.title;
  const year = "2025";
  const production = "Poland, UK, France";
  const date = movieBase.release_date;
  const cast = movieCredits.cast;
  const crew = movieCredits.crew;

  return { posterBig, posterSmall, title, year, description, production, date, cast, crew };

};