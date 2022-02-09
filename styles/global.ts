import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: "BMHANNAAir" ;
    src: url("/fonts/BMHANNAAir.woff2") format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  * {
    font-family: "BMHANNAAir";
    line-height: 1.3;
  }
`;
