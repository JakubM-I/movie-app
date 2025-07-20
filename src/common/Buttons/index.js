import { useEffect, useState } from "react";
import { currentPageSelector, setFirstPage, setLastPage, setNextPage, setPreviousPage, totalPagesSelector } from "../../features/moviesList/moviesSlice";
import { StyledButton, ButtonsContainer, GraySpan, BlueSpan, StyledInfoWrapper, StyledPageNumber } from "./styled"
import { useDispatch, useSelector } from "react-redux";

export const Buttons = () => {
  const page = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 559)
    } 
    handleResize()
    window.addEventListener("resize",handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
      <>
        {(isMobile) ? 
        (
            <ButtonsContainer>
              <StyledButton $reverse onClick={() => dispatch(setFirstPage())} disabled={page === 1}><GraySpan>{"<<"}</GraySpan></StyledButton>
              <StyledButton $reverse onClick={() => dispatch(setPreviousPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan></StyledButton>
              <StyledInfoWrapper><GraySpan>Page</GraySpan> <StyledPageNumber>{page}</StyledPageNumber> <GraySpan>of</GraySpan> <StyledPageNumber>{totalPages}</StyledPageNumber></StyledInfoWrapper>
              <StyledButton $next onClick={() => dispatch(setNextPage())} disabled={page === totalPages}><BlueSpan>{`>`}</BlueSpan></StyledButton>
              <StyledButton $next onClick={() => dispatch(setLastPage())} disabled={page === totalPages}><BlueSpan>{`>>`}</BlueSpan></StyledButton>
            </ButtonsContainer>
          )
          :
          (
          <ButtonsContainer>
            <StyledButton $reverse onClick={() => dispatch(setFirstPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan> First</StyledButton>
            <StyledButton $reverse onClick={() => dispatch(setPreviousPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan> Previous</StyledButton>
            <StyledInfoWrapper><GraySpan>Page</GraySpan> <StyledPageNumber>{page}</StyledPageNumber> <GraySpan>of</GraySpan> <StyledPageNumber>{totalPages}</StyledPageNumber></StyledInfoWrapper>
            <StyledButton $next onClick={() => dispatch(setNextPage())} disabled={page === totalPages}> Next <BlueSpan>{`>`}</BlueSpan></StyledButton>
            <StyledButton $next onClick={() => dispatch(setLastPage())} disabled={page === totalPages}> Last <BlueSpan>{`>`}</BlueSpan></StyledButton>
          </ButtonsContainer>
        )}
      </>
  )
}