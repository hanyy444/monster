import styled, {css} from 'styled-components';
import { colors } from '../../assets/styles/variables';

const ImageCompositionContainer = styled.div`
    position: relative;

    &:hover{
        img:not(:hover){
            transform: scale(.95);
        }
    }
    
`

const baseStyle = css`
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.1);
    border-radius: .2rem;
    transition: all .2s;
    position: absolute;
    outline-offset: 2rem;

    &:hover{
        transform: scale(1.05) translateY(-.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0,0,0, .5);
        outline: 1rem solid ${colors.tertiaryColor};
        z-index: 20;
    }    
`

const ImageOne = styled.img`
    ${baseStyle}    
    top: 0;
    left: -2rem;
`
const ImageTwo = styled.img`
    ${baseStyle}
    right: 0;
    top: 2rem;
`
const ImageThree = styled.img`
    ${baseStyle}
    left: 20%;
    top: 10rem;
`

export {
    ImageCompositionContainer,
    ImageOne,
    ImageTwo,
    ImageThree
}