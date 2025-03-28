import { useEffect, useState } from "react";
import { API_URL } from "../../common/detailsPages/detailsfetchFromAPI";
import { API_key } from "../../common/detailsPages/detailsfetchFromAPI";
import { timeDelay } from "../../common/detailsPages/timeDelay";

export const useMovieDataAPI = ({ id }) => {

  const [APIMovieData, setAPIMovieData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Base movie data
        // "https://api.themoviedb.org/3/movie/movie_id?api_key=3fa6324a34b047ad2073727e56c79251";
        let response = await fetch(`${API_URL}/movie/${id}${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieBase = await response.json();

        // Images movie data
        // "https://api.themoviedb.org/3/movie/movie_id/images?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${API_URL}/movie/${id}/images${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieImages = await response.json();

        // Credits movie data
        // "https://api.themoviedb.org/3/movie/movie_id/credits?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${API_URL}/movie/${id}/credits${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieCredits = await response.json();

        setAPIMovieData({
          state: "success",
          movieBase,
          movieImages,
          movieCredits,
        });
      } catch { setAPIMovieData({ state: "error", }) }
    };

    setTimeout(fetchData, timeDelay);
  }, []);

  return APIMovieData;
};