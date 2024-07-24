import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // 전역 스타일 설정
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #FFFFFF;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 부모 요소의 텍스트 색상 상속 */
    background: none; /* 배경 제거 */
    border: none; /* 테두리 제거 */
    outline: none; /* 포커스 시 외곽선 제거 */
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }

  a:active {
    text-decoration: none;
    color: inherit;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: none;
    user-select: none;
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  ::selection {
    background-color: #96CFEA;
    color: #FEFEFE;
  }

  ::-moz-selection {
    background-color: #96CFEA;
    color: #FEFEFE;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;