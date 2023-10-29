import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import AppleSDGothicNeoReguler from '../assets/font/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoSemiBold from '../assets/font/AppleSDGothicNeoSB.ttf';
import SFProTextSemiBold from '../assets/font/SF-Pro-Text-Semibold.otf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'AppleSDGothicNeoReguler';
    src: url(${AppleSDGothicNeoReguler}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'AppleSDGothicNeoSemiBold';
    src: url(${AppleSDGothicNeoSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }
  @font-face {
    font-family: 'SFProTextSemiBold';
    src: url(${SFProTextSemiBold}) format('opentype');
    font-style: normal;
    font-weight: 600;
  }
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'AppleSDGothicNeoReguler', 'AppleSDGothicNeoSemiBold', 'SFProTextSemiBold';
    letter-spacing: -0.05em;
    
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  h1, h2 {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .hidden {
    position: fixed;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  .date-picker {
    cursor: pointer !important;
    width: 100%;
    height: 44px;
    padding: 10px 20px;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    font-family: 'AppleSDGothicNeoReguler';
    font-size: 14px;
  }
  .react-datepicker__input-container {
    & > label {
      cursor: pointer !important;
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translate(0, -50%);
      padding: 0 !important;
    }
  }
  
`;

export default GlobalStyles;
