import styled from 'styled-components';
import BackgroundOne from 'assets/imgs/bg-1.jpg'
import BackgroundTwo from 'assets/imgs/bg-2.jpg'

export const HeaderContainer = styled.header`
    height: 100vh;
    background-image: linear-gradient(to top, 
                    var(--primary-color) 0%,
                    var(--secondary-color) 50%,
                    var(--tertiary-color) 100%), 
                    url(${BackgroundTwo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
`

export const HeaderTextBox = styled.div`
    width: 100%;
    height: 55%;
    color: var(--tertiary-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    @media screen and (max-width: 800px) {
        height: 65%;
        margin: 1.2rem 1.4rem;
    }
`