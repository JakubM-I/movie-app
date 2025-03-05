import { useSearchParams } from "react-router-dom";
import { StyledSearch, StyledSearchIcon, StyledSearchInput } from "./styled"

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("search") || "";

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
                placeholder="Search for movies..."
                value={query}
                onChange={onInputChange}
            />
        </StyledSearch>
    )
}

export default SearchForm;