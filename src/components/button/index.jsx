import styled, { css } from 'styled-components';
import { appearUp } from 'assets/styles/animations';

const baseStyle = css`
    cursor:pointer;
    /* box-shadow: 0 2rem 4rem var(--secondary-color); */
    border: none;
    font-weight: 500;
    `
const moveUpThenDownTransition = css`
    &:hover {
        transform: translateY(-3px) scale(1.1);
    }

    &:active{
        transform: translateY(0);
    }
`

export const FormButton = styled.button`
    ${baseStyle}
    padding: 1rem 0;
    font-size: 1.2rem;
    width: 100%;
    color: var(--quaternary-color);
    background-color: var(--secondary-color);
    border-radius: 5rem;
    transition: all .2s;

    &:hover, &:focus{
        transform: scale(1.1) translateY(-.5rem);
    }

    &:active, &:visited{
        transform: scale(1.1) translateY(0); 
    }
`

export const HeaderButton = styled.button`
    ${baseStyle}
    
    font-size: 2rem;
    border-radius: 5rem;
    
    color: var(--quaternary-color);
        
    width: 25%;

    @media screen and (max-width: 800px) {
        width: 50%;
    }
    
    position: relative;
    
    padding: 2rem 4rem;
    margin-bottom: -1rem;
    margin-left: -3rem;
    
    background-color: var(--secondary-color);

    display: inline-block;

    animation: ${appearUp} 1s ease-out;

    transform: translateY(0);
    
    transition: all .2s;
    

    &:hover, &:focus {
        transform: translateY(-.5rem);
        &::after{
            transform: scaleX(1.2) scaleY(1.4);
            opacity: 1;
        }
    }

    &:active{
        transform: translateY(-.2rem);
    }

    &::after{
        content: "";
        display: inline-block;
        background-color: var(--primary-color);
        width: 100%;
        height: 100%;
        
        border-radius: 5rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        opacity: 0;
        transition: all 0.2s ease-out;
    }
`

export const NewsButton = styled.button`
    ${baseStyle}
    border-bottom: 1px solid var(--tertiary-color);
    color: var(--tertiary-color);
    background-color: transparent;
    border-radius: 0;
    align-self: flex-start;
    padding: 1rem .5rem;
    font-size: 1.5rem;

    &:hover, &:focus{
        color: var(--white-color);
        border-radius: .2rem;
        background-color: var(--tertiary-color);
        box-shadow: 0 2rem 4rem rgba(0,0,0,.15);
    }
`

export const BookingButton = styled.button`
    ${baseStyle}

    /* height: clamp(5rem, 7vw, 7rem); */
    font-weight: 600;
    font-size: clamp(1.5rem, 2vw, 2rem);

    text-transform: uppercase;

    width: 20%;
    padding: 4rem;
    border-radius: 100px;

    position: relative;

    background-color: var(--tertiary-color);
    color: var(--secondary-color);

    transition: all .2s;

    &::before{
        content: 'only 4 places left !';
        font-size: inherit;
        z-index: -1;
        visibility: hidden;
        text-align: center;
        opacity: 0;
        position: absolute; 
        transform: translate(-50%, -150%); 
        width: 100%;
        transition: all .3s;
    }

    &::after{
        content: 'book now';
        display: inline-block;
        visibility: visible;
        opacity: 1;
        text-align: center;

        position: absolute; 
        transform: translate(-50%, -50%); 
        
        transition: all .3s;
    }

    &:hover, &:focus {
        transition: all .3s;
        transform: scale(1.1) translateY(-.5rem);
        &::before{
            visibility: visible;
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        &::after{
            visibility: hidden;
            opacity: 0;
            z-index: -1;
            transform: translate(-50%, 100%);
        }
    }

    &:active, &:visited{
        transform: scale(1.1) translateY(0); 
    }

    @media screen and (max-width: 800px) {
        width: 80%;
        padding: 3rem;
    }
`

export const SocialMediaButton = styled.button`
    transition: all .2s;
    
    svg {
        width: 3rem;
        height: 3rem;
    }

    ${moveUpThenDownTransition}
`
