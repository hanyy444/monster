import styled from 'styled-components';

export const NewsSectionContainer = styled.section`
    background-color: #eee;
    padding: 5vw;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5rem;
    @media screen and (max-width: 800px){
        /* height: 140vh; */
    }
    @media screen and (max-width: 600px){
        /* height: 120vh; */
    }
`