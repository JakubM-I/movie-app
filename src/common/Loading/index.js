import { useSearchParams } from "react-router-dom";
import { StyledSearchTitle, Wrapper, StyledSpinner } from "./styled";
import { useSelector } from "react-redux";
import { isSearchingSelector } from "../../features/moviesList/moviesSlice";
import { PageTitle } from "../PageHeader";

const Loading = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const isSearching = useSelector(isSearchingSelector);


  return (
    <Wrapper>
        {isSearching && ( <StyledSearchTitle title={`Result for: ${query}`} /> )}
      <StyledSpinner />
    </Wrapper>
  )
};

export default Loading;