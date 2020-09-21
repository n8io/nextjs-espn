import { GlobalStyles } from "../shared/GlobalStyles";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
