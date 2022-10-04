import { css } from "styled-components";

import { colors } from "./variables";

export const linearGradientText = css`
    background-image: linear-gradient(to bottom,
    ${colors.primaryColor} 0%,  
    ${colors.secondaryColor} 40%,
    ${colors.quaternaryColor} 65%);

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`