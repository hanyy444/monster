import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #0B1320;
        --secondary-color: #1C3F60;
        --tertiary-color: #AFC1D0;
        --quaternary-color: #B1D4E0;
        --white-color: #FFFFFF;
        --black-color: #000000;
    }

    *,
    *::after,
    *::before  {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        @media screen and (max-width: 600px){
            font-size: 50%;
        }
    }

    body {
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Alkalami', serif;
        text-align: center;
        background-color: var(--white-color);
        box-sizing: border-box;
        line-height: 1.7;
        font-weight: 400;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: black;
    }

    button{
        all: unset;
        cursor: pointer;
    }

    img {
        display: block;
    }

    ::selection{
        background-color: var(--secondary-color);
        color: var(--white-color);
    }   
    
    .app{
        height: 100vh;
        width: 100vw;
        scroll-behavior: smooth;
        overflow-x: hidden;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
export default GlobalStyle