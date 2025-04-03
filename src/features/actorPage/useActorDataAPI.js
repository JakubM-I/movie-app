import { useEffect, useState } from "react";
import { baseURL } from "../../common/utils/baseURL";
import { keyAPI } from "../../common/utils/keyAPI";

export const useActorDataAPI = ({ id }) => {

  const [APIActorData, setAPIActorData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Base actor data
        // "https://api.themoviedb.org/3/person/person_id?api_key=3fa6324a34b047ad2073727e56c79251";
        let response = await fetch(`${baseURL}/person/${id}${keyAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorBase = await response.json();

        // Images actor data
        // "https://api.themoviedb.org/3/person/person_id/images?api_key=3fa6324a34b047ad2073727e56c79251";
        /* response = await fetch(`${baseURL}/person/${id}/images${keyAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorImages = await response.json(); */

        // Movie credits actor data
        // "https://api.themoviedb.org/3/movie/movie_id/movie_credits?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${baseURL}/person/${id}/movie_credits${keyAPI}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorCredits = await response.json();

        setAPIActorData({
          state: "success",
          actorBase,
          actorCredits,
        });
      } catch { setAPIActorData({ state: "error", }) }
    };

    setTimeout(fetchData, 2000);
  }, []);

  return APIActorData;
};