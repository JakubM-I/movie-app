import { useEffect, useState } from "react";

const useMovieDetails = () => {

  const [movieData, setMovieData] = useState({
    state: "loading",
    title: null,
    vote_average: null,
    vote_count: null,
    release_date: null,
    poster_patach: null,
  });

  useEffect(() => {
    const fetchMovieData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjU0MjljZjA3OTdmMDdjY2U4YjM2NjhlODRmOTZjYyIsIm5iZiI6MTc0MTQ4MDE2Mi4wOSwic3ViIjoiNjdjY2UwZTJhNGRmOTdkYjk2NGY5NmQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RzwXsschNMuLJA_LNlfOMHfzwvMJmGUYxdNXANhhTdY'
        }
      };

      try {
        const response = await fetch("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher", options);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        const firstMovie = data.results[0];

        setMovieData({
          state: "succes",
          title: firstMovie ? firstMovie.title : "Brak wyników",
          vote_average: data.results[0].vote_average,
          vote_count: data.results[0].vote_count,
          release_date: data.results[0].release_date,
          poster_path: data.results[0].poster_path ? firstMovie.poster_path : "Brak wyników",
        });
      }

      catch {
        setMovieData({
          state: "error",
        });
      }
    }

    fetchMovieData();

  }, []);
  console.log(movieData);
  return movieData;
}

export default useMovieDetails;