import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/variables';
import { Link } from 'react-router-dom';

const { whiteColor, blackColor, primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = colors;

const ButtonContainer = styled.button`
    font-size: 2rem;
    font-weight: 500;

    margin: 1rem 0;
    padding: 2rem 3rem;
    
    color: ${quaternaryColor};
    
    border-radius: 5rem;
    
    cursor:pointer;
    border:1px solid ${tertiaryColor};

    box-shadow: 0 2rem 4rem ${tertiaryColor+'15'};

    /* &:hover {
        color: ${secondaryColor};
        background-color: ${tertiaryColor};
        outline: 1px solid ${tertiaryColor};
        
    } */
`

export {
    ButtonContainer
}