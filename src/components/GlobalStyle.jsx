import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.03em;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}
button {
  border: 0;
  padding: 0;
}
`;

export default GlobalStyle;
