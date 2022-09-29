import { createGlobalStyle, css} from "styled-components";

// Color Pallete
export const serenity = '#54627B';
export const champagne = '#ECD5BB';
export const darkChampagne = '#ecaf69';
export const white = '#FFFFFF';
export const crimson = '#710117';


const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        background-color: ${champagne};
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

`
export default GlobalStyle