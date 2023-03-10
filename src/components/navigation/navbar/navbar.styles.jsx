import styled from "styled-components";
import { linearGradientText } from "assets/styles/mixins";

export const NavbarContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 3rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoBox = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const Logo = styled.img`
    height: 5rem;
`

export const LogoText = styled.span`
    font-size: 1.2rem;
    text-transform: uppercase;
    ${linearGradientText}
`

export const Nav = styled.nav`
    /* width: 35%; */
    /* flex: 6; */
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;
`

export const NavItem = styled.li`
 
    padding: 2rem;
    &:hover{
        background-color: var(--tertiary-color);
        transform: scale(1.1);
    }
`

export const NavLink = styled.a`
    &:link, &:visited {
        color: var(--secondary-color);
        text-transform: uppercase;
        transition: transform 0.1s ease;
    }

    &:hover, &:active{
        color: var(--teritary-color);
        display: inline-block;
        background-color: var(--tertiary-color);
    }
`