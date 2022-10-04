import React from 'react';
import LogoSmallTwo  from '../../assets/imgs/logo-small-2.png'
// import LogoSmallThree from '../../assets/icons/skull.svg';
import { NavbarContainer, LogoBox, Logo, LogoText, Nav, NavList, NavItem, NavLink} from './navbar.styles';


const Navbar = (props) => {
    return ( 
        <NavbarContainer>
            <LogoBox>
                {/* <Logo><LogoSmallThree/></Logo> */}
                <Logo src={LogoSmallTwo} alt="Logo"/>
                <LogoText>Monster &#174; </LogoText>
            </LogoBox>

            <Nav>
                <NavList>
                    <NavItem><NavLink to="#">Shop</NavLink></NavItem>
                    <NavItem><NavLink to="#">Services</NavLink></NavItem>
                    <NavItem><NavLink to="#">About</NavLink></NavItem>
                    <NavItem><NavLink to="#">Contact</NavLink></NavItem>
                </NavList>
            </Nav>
        </NavbarContainer>
    )
}

export default Navbar;

