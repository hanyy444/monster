import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

const {tertiaryColor} = colors
const SignInContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`

const H1 = styled.h1`
    color: ${tertiaryColor};
` 
export {
    SignInContainer,
    H1
}