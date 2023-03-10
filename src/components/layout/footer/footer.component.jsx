import React from 'react';
import LogoSmallTwo  from 'assets/imgs/logo-small-2.png'
import { Logo, LogoBox, Nav, NavList, NavLink, NavItem, LogoText } from 'components/navigation/navbar/navbar.styles';
import { FooterContainer } from './footer.styles.jsx'

const Footer = (props) => {
    return ( 
        <FooterContainer id="footer" data-testid="footer">
            <LogoBox>
                <Logo src={LogoSmallTwo} alt="Logo"/>
                <LogoText>Monster &#174;</LogoText>
            </LogoBox>
            <Nav>
                <NavList>
                    <NavItem><NavLink href="#header">Explore</NavLink></NavItem>
                    <NavItem><NavLink href="#news-section">News</NavLink></NavItem>
                    <NavItem><NavLink href="#products-section">Products</NavLink></NavItem>
                    <NavItem><NavLink href="#booking-section">Book</NavLink></NavItem>
                </NavList>
            </Nav>
        </FooterContainer>
    )
}

export default Footer;

