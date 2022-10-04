import styled from "styled-components";
import { colors } from "../../assets/styles/variables";
import { linearGradientText } from "../../assets/styles/mixins";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 3rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


    position: fixed;
    top: 0;
`

export const LogoBox = styled.div`
    /* position: absolute;
    top: 2rem;
    left: 2rem; */

    /* display: inline-block; */
    text-align: center;
    cursor: pointer;


`

export const Logo = styled.img`
    height: 5rem;
    margin: 0 auto;
    display: block;
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
`

export const NavLink = styled(Link)`
    &:link, &:visited {
        color: ${colors.quaternaryColor};
        text-transform: uppercase;
        transition: transform 0.1s ease;
    }

    &:hover, &:active{
        color: ${colors.tertiaryColor};
        display: inline-block;
        transform: scale(1.1);
    }
`