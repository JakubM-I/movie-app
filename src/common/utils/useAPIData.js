import { useEffect, useState } from "react";

export const useAPIData = () => {

  const [APIdata, setAPIData] = useState({
    state: "loading",
  });

  // Fetching Movie

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/35?api_key=3fa6324a34b047ad2073727e56c79251");

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const movieData = await response.json();
        setAPIData({
          state: "success",
          movieData,
        });
      } catch { setAPIData({ state: "error", }) }
    };

    setTimeout(fetchData, 3000);
  }, []);



  /* const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmE2MzI0YTM0YjA0N2FkMjA3MzcyN2U1NmM3OTI1MSIsIm5iZiI6MTc0MTk0MDQzNy42MSwic3ViIjoiNjdkM2U2ZDVkY2JhNzBhMjY5NjRlYWMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.brcg1d7jawabimDzPmFtmZoKykPndUNwNzFHAOJIX48'
    }
  };
   */

  /* fetch('https://api.themoviedb.org/3/configuration', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err)); */


  // Images configuration
  /* const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmE2MzI0YTM0YjA0N2FkMjA3MzcyN2U1NmM3OTI1MSIsIm5iZiI6MTc0MTk0MDQzNy42MSwic3ViIjoiNjdkM2U2ZDVkY2JhNzBhMjY5NjRlYWMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.brcg1d7jawabimDzPmFtmZoKykPndUNwNzFHAOJIX48'
    }
  };
  
  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(res => res.json())
    .then(res => localStorage.setItem("images", JSON.stringify(res)))
    .catch(err => console.error(err)); */

  return APIdata;
}