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
  }
`;

export default GlobalStyles;
