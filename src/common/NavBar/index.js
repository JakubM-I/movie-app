import { StyledLogoIcon, StyledLogoName, StyledLogoNavLink, StyledLogoWrapper, StyledMenu, StyledMenuItem, StyledNavBar, StyledNavLink, StyledSearch, StyledSearchIcon, StyledSearchInput } from "./styled";
import logo from "../assets/video-logo.png";
import searchIcon from "../assets/search-icon.png";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <StyledNavBar>
        <StyledLogoNavLink to={"/"}>
            <StyledLogoIcon src={logo} alt="logo" />
            <StyledLogoName>Movies&nbsp;Browser</StyledLogoName>
        </StyledLogoNavLink>

        <StyledMenu>
            <StyledMenuItem>
                <StyledNavLink to={"/"}>
                    Movies
                </StyledNavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <StyledNavLink to={"/actors"}>
                    People
                </StyledNavLink>
            </StyledMenuItem>
        </StyledMenu>
        <StyledSearch >
            <StyledSearchIcon src={searchIcon} alt="search" />
            <StyledSearchInput type="text" placeholder="Search for movies..." />
        </StyledSearch>
    </StyledNavBar>
);

export default NavBar;