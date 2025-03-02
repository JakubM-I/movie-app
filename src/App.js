import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import MovieListApp from "./features/movieList/MovieListApp";


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
