import styled from 'styled-components';
import { flexCenter } from 'assets/styles/utils';

export const SignInPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;

`
export const Container = styled.div`
    background-color: var(--white-color);
    min-width: 35vw;
    height: 80vh;
    padding: 3rem 2.5rem;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        margin-top: auto;
        font-size: 1.4rem;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 3rem;
    }
    
    @media screen and (max-width: 800px) {
        display: ${prop => prop.pathname === '/sign-up' ? 'flex' : 'none'};
        width: 50vw;
    }
`
export const Link = styled.a`
    font-size: 1.2rem;
    color: var(--tertiary-color);
    &:hover{
        color: var(--quaternary-color);
    }
`

export const FormExtras = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const KeepLoggedInDiv = styled.div`
    font-size: 1.2rem;
    ${flexCenter}
    color: var(--secondary-color);
    gap: .5rem;
`
export const SocialMediaDiv = styled.div`
    ${flexCenter}
    gap: 1.5rem;
`