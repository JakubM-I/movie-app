import { StyledButton, ButtonsContainer } from "./styled"

export const Buttons = () => {

  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    return (
      <ButtonsContainer>
        <StyledButton reverse> {isMobile ? "<<" : "First {`<`}"} </StyledButton>
        <StyledButton reverse> {`<`} </StyledButton>
        Page 1 of 500
        <StyledButton next>  {`>`} </StyledButton>
        <StyledButton next> {`>>`} </StyledButton>
      </ButtonsContainer>
    );
  }
  return (

    <ButtonsContainer>
      <StyledButton reverse> First {`<`} </StyledButton>
      <StyledButton reverse> Previous {`<`} </StyledButton>
      Page 1 of 500
      <StyledButton next> Next {`>`} </StyledButton>
      <StyledButton next> Last {`>`} </StyledButton>
    </ButtonsContainer>
  )
}