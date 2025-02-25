import { StyledMenu, StyledMenuItem, StyledNavBar, StyledSearch } from "./styled";
import logo from "../assets/logo.png"

const NavBar = () => (
    <StyledNavBar>
        <img src={logo} alt="logo" />
        <StyledMenu>
            <StyledMenuItem>Movies</StyledMenuItem>
            <StyledMenuItem>People</StyledMenuItem>
        </StyledMenu>
        <StyledSearch />
    </StyledNavBar>
);

export default NavBar;