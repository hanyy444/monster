import React from 'react';
import { InputContainer, InputTag, InputIcon } from './input.styles.jsx'

const Input = ({ icon, ...inputProps}) => {
    return ( 
        <InputContainer data-testid="input">
            <InputIcon>{icon}</InputIcon>
            <InputTag {...inputProps}/>
        </InputContainer>
    )
}

export default Input;

