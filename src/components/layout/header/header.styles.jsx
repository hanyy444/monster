import styled from 'styled-components';
import BackgroundOne from 'assets/imgs/bg-1.jpg'
import BackgroundTwo from 'assets/imgs/bg-2.jpg'

export const HeaderContainer = styled.header`
    height: 100vh;
    background-image: linear-gradient(to top, 
                    rgba(11, 19, 32, .8) 0 20%,
                    rgba(28, 63, 96, .8) 100%), 
                    url(${BackgroundTwo});
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
`

export const HeaderTextBox = styled.div`
    width: 100%;
    height: 80%;
    /* height: 55%; */
    color: var(--tertiary-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 800px) {
        height: 65%;
        margin: 1.2rem 1.4rem;
        gap: 10rem;
    }
`