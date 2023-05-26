import '../style/global.css'
const { createGlobalStyle } = require("styled-components");


const GlobalStyles = createGlobalStyle`
  body{
      padding:0;
      margin:0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}