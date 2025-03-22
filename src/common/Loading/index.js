import { Wrapper } from "./styled";
import { StyledSpinner } from "./styled";

const Loading = () => {
  return (
    <Wrapper>
      Poczekaj chwilę na dane...
      <StyledSpinner />
    </Wrapper>
  )
};

export default Loading;