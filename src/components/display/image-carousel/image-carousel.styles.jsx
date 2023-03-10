import styled, {css} from 'styled-components';

export const ImageCarouselContainer = styled.div`
    width: 100%;
    flex: 4 0 40vw;
    background-color: var(--white-color);
    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 5rem;

`
export const ImagesContainer = styled.div`
    width: 100%;
    flex: 1;
    position: relative;
`
const ImageBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    height: 100%;
    position: absolute;
`
export const Image = styled.img`
    object-fit: cover;
    height: 25vw;
    @media screen and (max-width: 800px) {
        mix-blend-mode: color-burn;
    }
    transition: all .3s ease-out;
`
export const ImageBoxCenter = styled.div`
    ${ImageBox}
    max-height: 50vw;
    left: 50%;
    transform: translate(-50%);
    &:hover img{
        transform: scale(1.2);
    }
`
export const ImageBoxLeft = styled.div`
    ${ImageBox}
    left: -28%;
`
export const ImageBoxRight = styled.div`
    ${ImageBox}
    right: -28%;
`
export const ImageName = styled.p`
    font-size: 1.7rem;
    letter-spacing: .1rem;
`
export const Controls = styled.div`
    min-width: 50vw;
    /* background-color: var(--quaternary-color); */
    border-radius: 10rem;
    flex: 0.1;
    gap: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
    }  
`
export const Slider = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4vw;
    margin: 0 2rem;
`    
export const SliderBar = styled.div`
    width: 3rem;
    height: .5rem;
    ${props => props.active 
        ? css`background-color: var(--primary-color)` 
        : css`background-color: var(--tertiary-color)`};
    cursor: pointer;
`