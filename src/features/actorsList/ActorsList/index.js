
import { Buttons } from "../../../common/Buttons";
import { PageTitle } from "../../../common/PageHeader";
import { PageContainer, ActorsListContainer } from "./styled";
import { ActorCard } from "../ActorCard";

export const ActorsList = () => {
  const isMobile = console.log(window.innerWidth);
  return (
    <>
      <PageContainer>
        <PageTitle title="Popular movies" />

        <ActorsListContainer>
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
          <ActorCard />
        </ActorsListContainer>
        <Buttons />
       
      </PageContainer>

    </>
  );
}
