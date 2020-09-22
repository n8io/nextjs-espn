import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: Arial, monospace;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
  }

  a {
    &:active,
    &:hover {
      text-decoration: none;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyles };
