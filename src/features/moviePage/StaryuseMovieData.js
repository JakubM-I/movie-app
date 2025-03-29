import { API_imageURL } from "../../common/detailsPages/detailsFetchFromAPI";

export const useMovieData = ({ movieBase, movieImages, movieCredits }) => {

  const posterBig = `${API_imageURL}/${movieImages.backdrops[1].file_path}`;
  const posterSmall = `${API_imageURL}/${movieImages.posters[16].file_path}`;
  const description = movieBase.overview;
  const title = movieBase.title;
  const production = "Poland, UK, France";
  const date = movieBase.release_date;
  const cast = movieCredits.cast;
  const crew = movieCredits.crew;
  const year = new Date(date).getFullYear();

  return { posterBig, posterSmall, title, year, description, production, date, cast, crew };

};