import styled from 'styled-components';
import * as colors from '../../global-styles'

const SignInContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`

const H1 = styled.h1`
    color: ${colors.serenity};
` 
export {
    SignInContainer,
    H1
}