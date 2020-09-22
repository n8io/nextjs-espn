import App from 'next/app';

import { i18n } from 'src/i18n';
import { I18nNamespace } from 'src/shared/constants';
import { Providers } from 'src/shared/providers';

const Root = ({ Component, pageProps }) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);

Root.getInitialProps = async (context) => {
  const props = await App.getInitialProps(context);

  return {
    ...props,
    namespacesRequired: [I18nNamespace.CATEGORIES],
  };
};

export default i18n.appWithTranslation(Root);
