import App from "next/app";
import { i18n } from "../i18n";
import { GlobalStyles } from "../shared/GlobalStyles";

const Root = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

Root.getInitialProps = async (context) => {
  const props = await App.getInitialProps(context);

  return {
    ...props,
    namespacesRequired: ["common"],
  };
};

export default i18n.appWithTranslation(Root);
