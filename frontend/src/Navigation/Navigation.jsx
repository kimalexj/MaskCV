import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import MaskFace from '../img/maskface.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar light expand="md" id="mainNav">
            <NavbarBrand href="/">
                <h2 className="headerStyle">MaskCV</h2>
            </NavbarBrand>

            <Nav className="NavBlock bodyStyle" navbar>
                <NavItem>
                    <NavLink to="/About" tag={RRNavLink}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/Results" tag={RRNavLink}>Results</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/Credits" tag={RRNavLink}>Team/Credits</NavLink>
                </NavItem>
            </Nav>
            
            <img className="ml-auto" src={MaskFace} alt="MaskFace" width="50" height="50"/>
        </Navbar>
    );
}

export default Navigation;