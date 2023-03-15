import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid grey;
    position: relative;
    @media screen and (max-width: 800px) {
        width: 100%
    }
`

const InputIcon = styled.span`
    opacity: 0.3;
    flex: 1;

    svg {
        width: 2rem;
        height: 2rem;
    }
`

const InputTag = styled.input`
    border: none;
    outline: none;
    padding: 4rem 2.5rem;
    width: 100%;
    @media screen and (max-width: 800px) {
        background-color: transparent;
        font-size: 1.5rem;
        color: var(--white-color);
        outline: 2px solid var(--tertiary-color);
        padding: 3rem 4rem;
    }
    ::-webkit-input-placeholder{
        color: var(--tertiary-color)
    }
`

export {
    InputContainer,
    InputTag,
    InputIcon
}