import { Wrapper } from "./styled";
import { StyledSpinner } from "./styled";

const Loading = () => {
  return (
    <Wrapper>
      Poczekaj na pobranie wybranego filmu...
      <StyledSpinner />
    </Wrapper>
  )
};

export default Loading;