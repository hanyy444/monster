import styled from 'styled-components'
import { linearGradientText } from './mixins'

export const HeadingPrimary = styled.h1`
    color: var(--quaternary-color);
    text-transform: uppercase;
    margin: 2rem;
`

export const HeadingPrimaryMain = styled.p`
    display: block;
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: 3.5rem;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 600px){
        font-size: 3rem;
        letter-spacing: 2rem;
    }
`

export const HeadingPrimarySub = styled.p`
    display: block;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 2rem;
`

export const HeadingSecondary = styled.h2`
    font-size: clamp(1.5rem, 4rem, 5rem);
    font-weight: 800;
    ${linearGradientText};
`

export const HeadingTertiary = styled.h3`
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    color: var(--tertiary-color);
    @media screen and (max-width: 800px){
        font-weight: 800;
    }
`

export const HeadingQuaternary = styled.h4`
    font-size: 3rem;
    font-weight: 800;
    text-align: left;
    color: var(--secondary-color);
`

export const Paragraph = styled.p`
    font-size: 1.6rem;
    color: var(--black-color);
`