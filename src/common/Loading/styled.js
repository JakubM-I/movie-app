import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";
import { PageTitle } from "../PageHeader";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledSpinnerWrapper = styled.div`
  padding-block-start: 40px;
  flex-basis: 55%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.blue};
  height: 100px;
  width: 100px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 35px;
    width: 35px;
  }
`;

export const StyledSearchTitle = styled(PageTitle)`
  flex-basis: 55%;
  flex-grow: 1;
`;