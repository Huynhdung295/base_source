import { createGlobalStyle } from 'styled-components';
import { Reset } from './reset';

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
  ${Reset}
`;

export { GlobalStyle };
