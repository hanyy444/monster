import styled from 'styled-components'
import { linearGradientText } from './mixins'
import { colors } from './variables'

export const HeadingPrimary = styled.h1`
    color: ${colors.quaternaryColor};
    text-transform: uppercase;
    margin: 2rem;
`

export const HeadingPrimaryMain = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 800;
    letter-spacing: 3.5rem;
`

export const HeadingPrimarySub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 2rem;
`

export const HeadingSecondary = styled.h2`
    font-size: 4rem;
    padding: 4rem 2rem;
    font-weight: 800;
    ${linearGradientText};
`

export const HeadingTertiary = styled.h3`
    font-size: 2.5rem;
    padding: 2rem 0;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
    color: ${colors.tertiaryColor};
    `

export const Paragraph = styled.p`
    font-size: 1.6rem;
    text-align: left;
    color: ${colors.blackColor};

`