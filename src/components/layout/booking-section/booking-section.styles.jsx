import styled from 'styled-components';
import BookingImage from 'assets/imgs/booking-img.jpg'

export const BookingSectionContainer = styled.section`
    width: 100%;
    height: 80vh;
    padding: 5rem;
    background-color: var(--secondary-color);
    @media screen and (max-width: 800px) {
        height: 100vh;
    }
`

export const BookingContainer = styled.div`
    min-width: 10vw;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5rem;
    height: 100%;
    background-image: linear-gradient(105deg, 
                            rgba(255,255,255) 0%, 
                            rgba(255,255,255) 50%,
                            rgba(255,255,255,.2) 50%), 
                            url(${BookingImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem var(--black-color);

    @media screen and (max-width: 800px) {
        background-image: linear-gradient(105deg, 
                            rgba(255,255,255,0) 0%, 
                            rgba(255,255,255,0) 100%), 
                            url(${BookingImage});
        /* background-size: 100% 100%; */
        background-position: 80%;
        /* background-repeat: repeat-x; */
    }
`