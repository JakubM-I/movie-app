import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjU0MjljZjA3OTdmMDdjY2U4YjM2NjhlODRmOTZjYyIsIm5iZiI6MTc0MTQ4MDE2Mi4wOSwic3ViIjoiNjdjY2UwZTJhNGRmOTdkYjk2NGY5NmQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RzwXsschNMuLJA_LNlfOMHfzwvMJmGUYxdNXANhhTdY";
const BASE_URL = "https://api.themoviedb.org/3";

const Api = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: "pl-PL" },
        });
  
        const genreResponse = await axios.get(`${BASE_URL}/genre/movie/list`, {
          params: { api_key: API_KEY, language: "pl-PL" },
        });
  
        const genreMap = genreResponse.data.genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});
  
        console.log("Filmy z API:", response.data.results); 
        console.log("Mapa gatunków:", genreMap); 
  
        setGenres(genreMap);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Błąd pobierania filmów:", error);
      }
    };
  
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} genres={genres} />
      ))}
    </div>
  );
};

export default Api;
