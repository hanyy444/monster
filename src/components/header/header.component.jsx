import React from 'react';
import { HeaderContainer, HeaderTextBox } from './header.styles.jsx'
import { HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySub } from '../../assets/styles/typography.js';
import Button from '../button/button.component'

import Navbar from '../navbar/navbar'
const Header = (props) => {
    return ( 
        <HeaderContainer>
            <Navbar />
            <HeaderTextBox>
                <HeadingPrimary>
                    <HeadingPrimaryMain>Monster</HeadingPrimaryMain>
                    <HeadingPrimarySub>Your ride starts with us.</HeadingPrimarySub>
                </HeadingPrimary>
                <Button text={"Explore Now"} type="button"/>
            </HeaderTextBox>
        </HeaderContainer>
    )
}

export default Header;

