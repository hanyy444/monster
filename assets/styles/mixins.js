import { css } from "styled-components";

export const linearGradientText = css`
    background-image: linear-gradient(to bottom,
                        var(--primary-color) 0%,  
                        var(--secondary-color) 40%,
                        var(--quaternary-color) 65%);
    /* background-image: linear-gradient(to top,
    var(--primary-color) 0%,  
    var(--secondary-color) 50%); */

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`

export const section = css`
    padding: 5rem;
    height: 100vh;
`