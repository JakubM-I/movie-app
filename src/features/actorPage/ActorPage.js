import { useActorDataAPI } from "./useActorDataAPI";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/ErrorPage";
import { Actor } from "./Actor";

export const ActorPage = ({ id }) => {

  const { state, actorBase, actorCredits } = useActorDataAPI({ id });

  return (
    <>
      {state === "loading" ? (<Loading />)
        : state === "error" ? (<ErrorPage />)
          : (<Actor
            actorBase={actorBase}
            actorCredits={actorCredits}
          />)}
    </>
  );
};