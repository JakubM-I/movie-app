import { useEffect, useState } from "react";

export const useDataAPI = () => {

  const movieBaseURL = "https://api.themoviedb.org/3/movie/12?api_key=3fa6324a34b047ad2073727e56c79251";
  const movieImagesURL = "https://api.themoviedb.org/3/movie/12/images?api_key=3fa6324a34b047ad2073727e56c79251";
  const movieCastURL = "https://api.themoviedb.org/3/movie/12/credits?api_key=3fa6324a34b047ad2073727e56c79251";

  const [APIdata, setAPIData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(movieBaseURL);   // movie base

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const movieBase = await response.json();

        response = await fetch(movieImagesURL);     // movie images 

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const movieImages = await response.json();

        response = await fetch(movieCastURL);     // movie people

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const moviePeople = await response.json();

        setAPIData({
          state: "success",
          movieBase,
          movieImages,
          moviePeople,
        });
      } catch { setAPIData({ state: "error", }) }
    };

    setTimeout(fetchData, 2000);
  }, []);

  return APIdata;
};