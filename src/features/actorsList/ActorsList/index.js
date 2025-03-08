import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer } from "./styled";
import { ActorCard } from "../ActorCard";

export const ActorsList = () => {

  return (

    <div>
      <PageContainer>
        <PageTitle title="Popular movies" />

        <ActorsListContainer>
          <ActorCard />
        </ActorsListContainer>

      </PageContainer>
      <Buttons />

    </div>
  );
};