import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../assets/styles/variables';
import { textLeft, flexCenter } from '../../assets/styles/utils';

const { whiteColor, blackColor, primaryColor, secondaryColor, tertiaryColor, quaternaryColor } = colors;

const SignInContainer = styled.div`
    background-color: ${whiteColor};
    width: 32rem;
    height: 80vh;
    padding: 2rem 2.5rem;
    box-shadow: 0 .5rem 1.5rem rgba(${blackColor}, 0.35);
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    margin: 5rem;

    h2{
        ${textLeft}
    }

    p {
        margin-top: auto;
        font-size: 1.4rem;
    }

    form{
        padding: 1rem 0;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 800px) {
        display: ${prop => prop.pathname === '/sign-in' ? 'flex' : 'none'};
        width: 50vw;
    }

`


const hovering = css`
    color: ${primaryColor};

    &:hover{
        color: ${secondaryColor};
    }
`

const StyledLink = styled(Link)`${hovering}`
const StyledSmallLink = styled(Link)`
    font-size: 1.2rem;
    ${hovering}
`
const Span = styled.span`font-size: 1.5rem;`

const FormExtras = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    margin-top: -1rem;
`
const KeepLoggedInDiv = styled.div`
    font-size: 1.2rem;
    ${flexCenter}
    color: ${quaternaryColor};
    gap: .5rem;
`


const SocialMediaDiv = styled.div`
    ${flexCenter}
    gap: 1.5rem;
    margin: 3rem;
`


export {
    SignInContainer,
    KeepLoggedInDiv,
    FormExtras,
    StyledLink,
    StyledSmallLink,
    SocialMediaDiv,
    Span
}