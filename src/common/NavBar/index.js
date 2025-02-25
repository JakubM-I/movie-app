import { StyledNavBar } from "./styled";
import logo from "../assets/logo.png"

const NavBar = () => (
    <StyledNavBar>
        <img src={logo} alt="logo" />
    </StyledNavBar>
);

export default NavBar;