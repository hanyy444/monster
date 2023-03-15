import styled, {css} from 'styled-components';

export const ImageCompositionContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    flex: 1;
    &:hover{
        img:not(:hover){
            transform: scale(.95);
        }
    }
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const imgBaseStyle = css`
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.1);
    border-radius: .2rem;
    transition: all .2s;
    position: absolute;
    
    outline-offset: 2rem;

    &:hover{
        transform: scale(1.05) translateY(-.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0,0,0, .5);
        outline: 1rem solid var(--tertiary-color);
        z-index: 20;
        @media screen and (max-width: 800px) {
            outline: none;
        }
    }    

    @media screen and (max-width: 800px) {
        position: relative;
        width: 100%;
    }
`

export const ImageOne = styled.img`
    ${imgBaseStyle}    
    top: 0;
    left: -2rem;
    @media screen and (max-width: 800px) {
        top:0;
        left:0;
    }
`
export const ImageTwo = styled.img`
    ${imgBaseStyle}
    right: 0;
    top: 2rem;
    @media screen and (max-width: 800px) {
        top: 0;
    }
`
export const ImageThree = styled.img`
    ${imgBaseStyle}
    left: 20%;
    top: 10rem;
    @media screen and (max-width: 800px) {
        top: 0;
        left:0;
    }
`