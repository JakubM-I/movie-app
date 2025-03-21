import { currentPageSelector, totalPagesSelector } from "../../features/moviesList/moviesSlice";
import { StyledButton, ButtonsContainer, GraySpan } from "./styled"
import { useSelector } from "react-redux";

export const Buttons = () => {
  const page = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <ButtonsContainer>
        <StyledButton reverse> {"<<"} </StyledButton>
        <StyledButton reverse> {`<`} </StyledButton>
        <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
        <StyledButton next>  {`>`} </StyledButton>
        <StyledButton next> {`>>`} </StyledButton>
      </ButtonsContainer>
    );
  }

  return (

    <ButtonsContainer>
      <StyledButton reverse> First {`<`} </StyledButton>
      <StyledButton reverse> Previous {`<`} </StyledButton>
      <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
      <StyledButton next> Next {`>`} </StyledButton>
      <StyledButton next> Last {`>`} </StyledButton>
    </ButtonsContainer>
  )
}