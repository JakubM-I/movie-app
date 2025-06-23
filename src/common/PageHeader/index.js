import { StyledPageTitle } from "./styled";

export const PageTitle = ({ title, className }) => {
  return <StyledPageTitle className={className}>{title}</StyledPageTitle>;
}