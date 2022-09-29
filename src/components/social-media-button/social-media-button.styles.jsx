import styled, { css, keyframes } from 'styled-components';

const moveUpThenDownTransition = css`
    &:hover {
        transform: translateY(-3px) scale(1.1);
    }

    &:active{
        transform: translateY(0);
    }
`

const SocialMediaButtonContainer = styled.span`
    cursor: pointer;

    transition: all .2s;
    
    svg {
        height: ${props => props.height};
        width: ${props => props.width};
    }

    ${moveUpThenDownTransition}
`


export {
    SocialMediaButtonContainer
}