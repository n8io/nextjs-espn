import App from "next/app";
import { i18n } from "../i18n";

const Root = ({ Component, pageProps }) => <Component {...pageProps} />;

Root.getInitialProps = async (context) => {
  const props = await App.getInitialProps(context);

  return {
    ...props,
    namespacesRequired: ["common"],
  };
};

export default i18n.appWithTranslation(Root);
