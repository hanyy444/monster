import React from 'react';
import { ButtonContainer } from './button.styles.jsx'

const Button = ({ text, ...otherProps }) => (
    <ButtonContainer data-testid="button" {...otherProps}> {text} </ButtonContainer>
)    

export default Button;

