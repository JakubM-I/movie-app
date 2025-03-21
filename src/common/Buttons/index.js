import { currentPageSelector, setFirstPage, setLastPage, setNextPage, setPreviousPage, totalPagesSelector } from "../../features/moviesList/moviesSlice";
import { StyledButton, ButtonsContainer, GraySpan } from "./styled"
import { useDispatch, useSelector } from "react-redux";

export const Buttons = () => {
  const page = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const dispatch = useDispatch();

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <ButtonsContainer>
        <StyledButton reverse onClick={() => dispatch(setFirstPage())}> {"<<"} </StyledButton>
        <StyledButton reverse onClick={() => dispatch(setPreviousPage())}> {`<`} </StyledButton>
        <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
        <StyledButton next onClick={() => dispatch(setNextPage())}>  {`>`} </StyledButton>
        <StyledButton next onClick={() => dispatch(setLastPage())}> {`>>`} </StyledButton>
      </ButtonsContainer>
    );
  }

  return (

    <ButtonsContainer>
      <StyledButton reverse onClick={() => dispatch(setFirstPage())}> First {`<`} </StyledButton>
      <StyledButton reverse onClick={() => dispatch(setPreviousPage())}> Previous {`<`} </StyledButton>
      <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
      <StyledButton next onClick={() => dispatch(setNextPage())}> Next {`>`} </StyledButton>
      <StyledButton next onClick={() => dispatch(setLastPage())}> Last {`>`} </StyledButton>
    </ButtonsContainer>
  )
}