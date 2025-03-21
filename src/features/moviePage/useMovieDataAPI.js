import { useEffect, useState } from "react";
import { baseURL } from "../../common/utils/baseURL";
import { keyAPI } from "../../common/utils/keyAPI";

export const useMovieDataAPI = ({ id }) => {

  const [APIdata, setAPIData] = useState({
    state: "loading",
  });

  const movieBaseURL = `${baseURL}/movie/${id}?${keyAPI}`;
  // "https://api.themoviedb.org/3/movie/212?api_key=3fa6324a34b047ad2073727e56c79251";
  const movieImagesURL = `${baseURL}/movie/${id}/images?${keyAPI}`;
  // "https://api.themoviedb.org/3/movie/212/images?api_key=3fa6324a34b047ad2073727e56c79251";
  const movieCreditsURL = `${baseURL}/movie/${id}/credits?${keyAPI}`;
  // "https://api.themoviedb.org/3/movie/212/credits?api_key=3fa6324a34b047ad2073727e56c79251";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(movieBaseURL);   // base

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieBase = await response.json();

        response = await fetch(movieImagesURL);     // images 

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const movieImages = await response.json();

        response = await fetch(movieCreditsURL);     // credits

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const movieCredits = await response.json();

        setAPIData({
          state: "success",
          movieBase,
          movieImages,
          movieCredits,
        });
      } catch { setAPIData({ state: "error", }) }
    };

    setTimeout(fetchData, 2000);
  }, []);

  return APIdata;
};