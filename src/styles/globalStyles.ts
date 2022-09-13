import { createGlobalStyle } from 'styled-components'
import PretendardVariable from '../assets/font/PretendardVariable.ttf'

export default createGlobalStyle`
@font-face {
    font-family: "PretendardVariable";
    src: url(${PretendardVariable}) format('truetype');
  }
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    /* rem 값의 기준을 잡기 위함 16px -> 10px */
  }

  body {
    margin: 0;
  }
`
