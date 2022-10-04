import styled from 'styled-components';


const InputContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1rem;
    // box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
    height: 4rem;
    border-bottom: 1px solid grey;
    margin: 3rem 0;
    position: relative;

    /* &:focus-within {
        border: 1px solid grey;
    } */

`

const InputIcon = styled.span`
    opacity: 0.3;
    flex: 1;

    svg {
        width: 2.5rem;
        height: 2.5rem;
    }
`

const InputTag = styled.input`
    border: none;
    outline: none;
    
    padding: .5rem 1rem;
    flex: 9;

`

export {
    InputContainer,
    InputTag,
    InputIcon
}