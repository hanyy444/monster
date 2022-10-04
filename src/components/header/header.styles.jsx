import styled, { keyframes } from 'styled-components';
import BackgroundOne from '../../assets/imgs/bg-1.jpg'
import BackgroundTwo from '../../assets/imgs/bg-2.jpg'

import { colors } from '../../assets/styles/variables';
import { appearUp } from '../../assets/styles/animations';



const HeaderContainer = styled.header`
    height: 100vh;
    background-image: linear-gradient( to bottom, 
                    ${colors.primaryColor + '80'} 0%,
                    ${colors.secondaryColor + '80'} 50%,
                    ${colors.tertiaryColor + '40'} 100%)
                    , url(${BackgroundTwo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
`


const opacityFade = keyframes`
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`

const HeaderTextBox = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    width: 100%;
    color: ${colors.tertiaryColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 55%;
    align-items: center;

    button{

        width: 20%;
        
        position: relative;

        margin-bottom: -1rem;
        margin-left: -3rem;
        
        /* background-color: ${colors.tertiaryColor + '40'}; */
        background-color: transparent;

        display: inline-block;

        animation: ${appearUp} 1s ease-out;
        
        transition: all .2s;
        

        &:hover{
            transform: translateY(-.3rem);
            border: none;
            &::after{
                transform: scaleX(1.2) scaleY(1.4);
                opacity: 1;
                /* animation: ${opacityFade} .5s ease-out;  */
            }
        }

        &:active, &:focus{
            transform: translateY(-.1rem);
        }

        &::after{
                content: "";
                display: inline-block;
                background-color: ${colors.primaryColor};
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

    }

`

export {
    HeaderContainer,
    HeaderTextBox
}