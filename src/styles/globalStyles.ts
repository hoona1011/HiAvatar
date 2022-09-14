import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable';
    
  }

  html {
    font-size: 62.5%;
    /* rem 값의 기준을 잡기 위함 16px -> 10px */
  }

  body {
    margin: 0;
  }
`
