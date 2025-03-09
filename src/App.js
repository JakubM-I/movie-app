import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import { useDispatch } from "react-redux";
import { use, useEffect } from "react";
import { fetchMovies } from "./features/moviesList/moviesSlice";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
