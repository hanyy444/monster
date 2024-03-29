import React from 'react';
import { HeaderContainer, HeaderTextBox } from './header.styles.jsx'
import { HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySub } from 'assets/styles/typography.js';
import {HeaderButton} from 'components/button'

import Navbar from 'components/navigation/navbar/navbar'

const Header = (props) => {
    return ( 
        <HeaderContainer id="header" data-testid="header">
            <Navbar />
            <HeaderTextBox>
                <HeadingPrimary>
                    <HeadingPrimaryMain>Monster</HeadingPrimaryMain>
                    <HeadingPrimarySub>Your ride starts with us.</HeadingPrimarySub>
                </HeadingPrimary>
                {/* <HeaderButton data-testid="header-button" type="button" text="Explore Now">E</HeaderButton> */}
                <HeaderButton type="button">Explore Now</HeaderButton>
            </HeaderTextBox>
        </HeaderContainer>
    )
}

export default Header;

