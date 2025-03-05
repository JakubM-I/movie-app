import { useSearchParams } from "react-router-dom";
import searchIcon from "../assets/search-icon.png";
import { StyledSearch, StyledSearchIcon, StyledSearchInput } from "./styled"

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("search") || "";
    const currrentUrl = window.location.href;

    const isActorsPage = currrentUrl.includes("actors");

    const onInputChange = ({ target }) => {
        setSearchParams(target.value.trim()
            ? { search: target.value }
            : searchParams.delete("search"));
    }

    return (
        <StyledSearch >
            <StyledSearchIcon src={searchIcon} alt="search" />
            <StyledSearchInput
                type="text"
                placeholder={`Search for ${isActorsPage ? "actors" : "movies"}...`}
                value={query}
                onChange={onInputChange}
            />
        </StyledSearch>
    )
}

export default SearchForm;