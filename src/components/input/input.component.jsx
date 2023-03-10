import React from 'react';
import { InputContainer, InputTag, InputIcon } from './input.styles.jsx'

const Input = ({ Icon, ...inputProps}) => {
    return ( 
        <InputContainer data-testid="input">
            <InputIcon>{Icon ? <Icon/> : null}</InputIcon>
            <InputTag {...inputProps}/>
        </InputContainer>
    )
}

export default Input;

