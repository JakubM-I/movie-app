import { StyledSearch, StyledSearchIcon, StyledSearchInput } from "./styled"

const SearchForm = () => {
    return (
        <StyledSearch >
            <StyledSearchIcon src={searchIcon} alt="search" />
            <StyledSearchInput type="text" placeholder="Search for movies..." />
        </StyledSearch>
    )
}

export default SearchForm;