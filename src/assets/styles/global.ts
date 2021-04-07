import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Colors, Fonts } from './variables'

import ProximaNovaRegular from '../fonts/ProximaNova-Regular.ttf'
import ProximaNovaSemiBold from '../fonts/ProximaNova-Semibold.ttf'

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${ProximaNovaRegular}');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('${ProximaNovaSemiBold}');
    font-weight: 600;
  }

  body,
  input,
  textarea,
  button {
    color: ${Colors.DIMGRAY};
    font-family: 'Proxima Nova', sans-serif;
    font-size: 16px;
    font-weight: ${Fonts.REGULAR};
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

`

export default GlobalStyles
