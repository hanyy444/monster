import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const { tertiaryColor } = colors;

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before  {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Alkalami', serif;
        text-align: center;
        background-color: ${tertiaryColor};
        box-sizing: border-box;
        line-height: 1.7;
        font-weight: 400;

        /* overflow: hidden; */
    }

    a {
        text-decoration: none;
        color: black;
    }

`
export default GlobalStyle