import { ActorPage } from "./ActorPage";
import { useParams } from "react-router-dom";

function ActorPageApp() {

  const { id } = useParams();

  return (<ActorPage id={id} />);
};

export default ActorPageApp;