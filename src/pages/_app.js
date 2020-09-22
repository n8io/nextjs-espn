import App from 'next/app';

import { i18n } from 'src/i18n';
import { I18nNamespace } from 'src/shared/constants';

const Root = ({ Component, pageProps }) => <Component {...pageProps} />;

Root.getInitialProps = async (context) => {
  const props = await App.getInitialProps(context);

  return {
    ...props,
    namespacesRequired: [I18nNamespace.CATEGORIES],
  };
};

export default i18n.appWithTranslation(Root);
