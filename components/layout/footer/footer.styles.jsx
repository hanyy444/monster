import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white-color);
    padding: 5rem;
    font-size: 1.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    gap: 2rem;

    img{
        width: 8rem;
        height: 8rem;
    }

    nav {
        min-width: 40vw;
    }
`

export {
    FooterContainer
}