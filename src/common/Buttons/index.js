import { StyledButton, ButtonsContainer, GraySpan } from "./styled"

export const Buttons = () => {

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <ButtonsContainer>
        <StyledButton reverse> {"<<"} </StyledButton>
        <StyledButton reverse> {`<`} </StyledButton>
        <GraySpan>Page</GraySpan> 1 <GraySpan>of</GraySpan> 500
        <StyledButton next>  {`>`} </StyledButton>
        <StyledButton next> {`>>`} </StyledButton>
      </ButtonsContainer>
    );
  }

  return (

    <ButtonsContainer>
      <StyledButton reverse> First {`<`} </StyledButton>
      <StyledButton reverse> Previous {`<`} </StyledButton>
      <GraySpan>Page</GraySpan> 1 <GraySpan>of</GraySpan> 500
      <StyledButton next> Next {`>`} </StyledButton>
      <StyledButton next> Last {`>`} </StyledButton>
    </ButtonsContainer>
  )
}