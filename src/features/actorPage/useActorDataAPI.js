import { useEffect, useState } from "react";
import { baseURL } from "../../common/utils/baseURL";
import { keyAPI } from "../../common/utils/keyAPI";

export const useActorDataAPI = ({ id }) => {

  const [APIdata, setAPIData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Base movie data
        // "https://api.themoviedb.org/3/movie/movie_id?api_key=3fa6324a34b047ad2073727e56c79251";
        let response = await fetch(`${baseURL}/movie/${id}${keyAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieBase = await response.json();

        // Images movie data
        // "https://api.themoviedb.org/3/movie/movie_id/images?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${baseURL}/movie/${id}/images${keyAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieImages = await response.json();

        // Credits movie data
        // "https://api.themoviedb.org/3/movie/movie_id/credits?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${baseURL}/movie/${id}/credits${keyAPI}`);
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