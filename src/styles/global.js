import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
  height: 100%;
}
`;

export default GlobalStyle;
