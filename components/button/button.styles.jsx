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

export const FormButtonContainer = styled.button`
    ${baseStyle}
    padding: 1rem 0;
    font-size: 1.2rem;
    width: 100%;
    color: var(--quaternary-color);
    background-color: var(--secondary-color);
    border-radius: 5rem;
    transition: all .2s;

    &:hover{
        transform: scale(1.1) translateY(-.5rem);
    }

    &:active, &:visited{
        transform: scale(1.1) translateY(0); 
    }
`

export const HeaderButtonContainer = styled.button`
    ${baseStyle}
    
    font-size: 2rem;
    border-radius: 5rem;
    
    color: var(--quaternary-color);
        
    width: 25%;
    
    position: relative;
    
    padding: 2rem 4rem;
    margin-bottom: -1rem;
    margin-left: -3rem;
    
    background-color: var(--secondary-color);

    display: inline-block;

    animation: ${appearUp} 1s ease-out;
    
    transition: all .2s;
    

    &:hover{
        transform: translateY(-.3rem);
        &::after{
            transform: scaleX(1.2) scaleY(1.4);
            opacity: 1;
        }
    }

    &:active, &:focus{
        transform: translateY(-.1rem);
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

export const NewsButtonContainer = styled.button`
    ${baseStyle}
    border-bottom: 1px solid var(--tertiary-color);
    color: var(--tertiary-color);
    background-color: transparent;
    border-radius: 0;
    align-self: flex-start;
    padding: 1rem .5rem;
    font-size: 1.5rem;

    &:hover{
        color: var(--white-color);
        border-radius: .2rem;
        background-color: var(--tertiary-color);
        box-shadow: 0 2rem 4rem rgba(0,0,0,.15);
    }
`

export const BookingButtonContainer = styled.button`
    ${baseStyle}
    font-weight: 600;
    font-size: 1.8rem;
    text-transform: uppercase;
    height: clamp(5rem, 7vw, 7rem);
    width: 20%;
    padding: 1.5rem 4rem;
    border-radius: 100px;
    transition: all .2s;
    position: relative;
    background-color: var(--quaternary-color);
    color: var(--secondary-color);

    transition: all .2s;

    &::before{
        content: 'only four places left';
        visibility: hidden;
        position: absolute;
        text-align: center;
        opacity: 0;
        top:0;
        left: 50%;
        transform: translate(-50%, -100%);
        transition: all .3s;
    }

    &::after{
        content: 'Book now';
        visibility: visible;
        opacity: 1;
        position: absolute;
        text-align: center;
        top:0;
        left: 50%;
        transform: translate(-50%, 110%);
        transition: all .3s;
    }

    &:hover {
        transition: all .3s;
        transform: scale(1.1) translateY(-.5rem);
        &::before{
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 40%);
        }
        &::after{
            visibility: hidden;
            opacity: 0;
            z-index: -1;
            transform: translate(-50%, 350%);
        }
    }

    &:active, &:visited{
        transform: scale(1.1) translateY(0); 
    }

    @media screen and (max-width: 800px) {
        width: 80%;
        padding: 2rem;
    }
`

export const SocialMediaButtonContainer = styled.button`
    transition: all .2s;
    
    svg {
        width: 3rem;
        height: 3rem;
    }

    ${moveUpThenDownTransition}
`
