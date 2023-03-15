import styled from 'styled-components';

export const BookingFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    gap: 5rem;
    @media screen and (max-width: 800px) {
        align-items: center;
    }
`
