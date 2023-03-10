import React from 'react';
import { HeaderButtonContainer } from './button.styles.jsx'

const HeaderButton = ({ text, ...otherProps }) => (
    <HeaderButtonContainer data-testid="header-button" {...otherProps}> {text} </HeaderButtonContainer>
)    

export default HeaderButton;

