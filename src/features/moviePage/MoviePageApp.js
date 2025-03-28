import { MoviePage } from "./MoviePage";
import { useParams } from "react-router-dom";

function MoviePageApp() {

  const { id } = useParams();

  return (<MoviePage id={id} />);
};

export default MoviePageApp;