import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
    font-size: 18px;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1 {
    margin: 0;
  }
`;
