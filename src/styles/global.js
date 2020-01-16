import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191919;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 50px;
  }

  button {
    cursor: pointer;
  }

  .App {
    max-width: 900px;
    padding: 30px;
    border-radius: 4px;
    background-color: #fff;
  }
`;