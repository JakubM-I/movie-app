import { StyledLogoIcon, StyledLogoName, StyledLogoWrapper, StyledMenu, StyledMenuItem, StyledNavBar, StyledSearch, StyledSearchInput } from "./styled";
import logo from "../assets/video-logo.png";
import searchIcon from "../assets/search-icon.png";

const NavBar = () => (
    <StyledNavBar>
        <StyledLogoWrapper >
            <StyledLogoIcon src={logo} alt="logo" />
            <StyledLogoName>Movies&nbsp;Browser</StyledLogoName>
        </StyledLogoWrapper>

        <StyledMenu>
            <StyledMenuItem>Movies</StyledMenuItem>
            <StyledMenuItem>People</StyledMenuItem>
        </StyledMenu>
        <StyledSearch >
            <img src={searchIcon} alt="search" />
            <StyledSearchInput type="text" placeholder="Search for movies..." />
        </StyledSearch>
    </StyledNavBar>
);

export default NavBar;