import { keyframes } from "styled-components"

export const appearUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`