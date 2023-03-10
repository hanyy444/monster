import React from 'react';
import LogoSmallTwo  from 'assets/imgs/logo-small-2.png'
// import LogoSmallThree from 'assets/icons/skull.svg';
import { NavbarContainer, LogoBox, Logo, LogoText, Nav, NavList, NavItem, NavLink} from './navbar.styles';


const Navbar = (props) => {
    return ( 
        <NavbarContainer id="navbar" data-testid="navbar">
            <LogoBox>
                {/* <Logo><LogoSmallThree/></Logo> */}
                <Logo src={LogoSmallTwo} alt="Logo"/>
                <LogoText>Monster &#174; </LogoText>
            </LogoBox>

            <Nav>
                <NavList>
                    <NavItem><NavLink href="#news-section">News</NavLink></NavItem>
                    <NavItem><NavLink href="#products-section">Shop</NavLink></NavItem>
                    <NavItem><NavLink href="#booking-section">Book</NavLink></NavItem>
                    {/* <NavItem><NavLink href="/sign-in">Sign In</NavLink></NavItem> */}
                </NavList>
            </Nav>
        </NavbarContainer>
    )
}

export default Navbar;

