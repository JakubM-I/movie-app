import { StyledLogoIcon, StyledLogoName, StyledLogoWrapper, StyledMenu, StyledMenuItem, StyledNavBar, StyledSearch } from "./styled";
import logo from "../assets/video-logo.png"

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
        <StyledSearch />
    </StyledNavBar>
);

export default NavBar;