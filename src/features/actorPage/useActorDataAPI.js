import { useEffect, useState } from "react";
import { API_URL } from "../../common/detailsPages/API_URL";
import { API_key } from "../../common/detailsPages/API_key";
import { timeDelay } from "../../common/detailsPages/timeDelay";

export const useActorDataAPI = ({ id }) => {

  const [APIActorData, setAPIActorData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        // Base actor data
        // "https://api.themoviedb.org/3/person/person_id?api_key=3fa6324a34b047ad2073727e56c79251";
        let response = await fetch(`${API_URL}/person/${id}${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorBase = await response.json();

        // Images actor data
        // "https://api.themoviedb.org/3/person/person_id/images?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${API_URL}/person/${id}/images${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorImages = await response.json();

        // Movie credits actor data
        // "https://api.themoviedb.org/3/person/person_id/movie_credits?api_key=3fa6324a34b047ad2073727e56c79251";
        response = await fetch(`${API_URL}/person/${id}/movie_credits${API_key}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const actorCredits = await response.json();

        setAPIActorData({
          state: "success",
          actorBase,
          actorImages,
          actorCredits,
        });
      } catch { setAPIActorData({ state: "error", }) }
    };

    setTimeout(fetchData, timeDelay);
  }, []);

  return APIActorData;
};