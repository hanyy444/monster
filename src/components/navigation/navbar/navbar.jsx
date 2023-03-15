import React from 'react';
import LogoSmallTwo  from 'assets/imgs/logo-small-2.png'
// import LogoSmallThree from 'assets/icons/skull.svg';
import { NavbarContainer, LogoBox, Logo, LogoText, Nav, NavList, NavLink} from './navbar.styles';


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
                    <NavLink href="#news-section">News</NavLink>
                    <NavLink href="#products-section">Shop</NavLink>
                    <NavLink href="#booking-section">Book</NavLink>
                    {/* <NavItem><NavLink href="/sign-in">Sign In</NavLink></NavItem> */}
                </NavList>
            </Nav>
        </NavbarContainer>
    )
}

export default Navbar;

