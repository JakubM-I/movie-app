import { Outlet } from "react-router-dom";
import Header from "./common/Header";
import MovieListApp from "./features/movieList/MovieListApp";
import ActorsList from "./features/actorsList/ActorsListApp";


function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
