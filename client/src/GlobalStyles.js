// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
