import { Wrapper, StyledSpinner } from "./styled";

export const LoadingMovie = () => {
  return (
    <Wrapper>
      Poczekaj na pobranie wybranego filmu...
      <StyledSpinner />
    </Wrapper>
  )
};