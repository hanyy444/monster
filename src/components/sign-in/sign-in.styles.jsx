import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../global-styles'

const FlexCenterContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SignInContainer = styled.div`
    background-color: ${colors.white};
    width: 32rem;
    height: 80vh;
    padding: 2rem 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0 .5rem 1.5rem;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    margin: 5rem;

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

const H2 = styled.h2`
    font-size: 2.5rem;
    margin: 1rem 0;
    text-align: left;
    font-weight: 800;
`

const hovering = css`
    color: ${colors.darkChampagne};

    &:hover{
        color: ${colors.champagne};
    }
`

const StyledLink = styled(Link)`${hovering}`
const StyledSmallLink = styled(Link)`
    font-size: 1.2rem;
    ${hovering}
`
const StyledSpan = styled.span`font-size: 1.5rem;`

const FormExtras = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    margin-top: -1rem;
`
const KeepLoggedInDiv = styled.div`
    font-size: 1.2rem;
    ${FlexCenterContainer}
    color: ${colors.serenity};
`


const SocialMediaDiv = styled.div`
    ${FlexCenterContainer}
    gap: 1.5rem;
    margin: 3rem;
`


export {
    SignInContainer,
    H2,
    KeepLoggedInDiv,
    FormExtras,
    StyledLink,
    StyledSmallLink,
    SocialMediaDiv,
    StyledSpan
}