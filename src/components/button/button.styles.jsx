import styled, { css } from 'styled-components';
import * as colors from '../../global-styles'


const ButtonContainer = styled.button`
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    background-color: ${colors.serenity};
    border-radius: 1rem;
    border:none;
    color:white;
    cursor:pointer;
    font-size: 1.3rem;
    font-weight: 500;

    &:hover {
        color: ${colors.serenity};
        background-color: white;
        outline: 1px solid ${colors.serenity}
    }
`

export {
    ButtonContainer
}