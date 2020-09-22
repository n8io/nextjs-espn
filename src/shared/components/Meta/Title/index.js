import Head from 'next/head';

import { useTranslate } from '../../../hooks';

const Title = ({ overwrite = false, title }) => {
  const t = useTranslate();

  return (
    <Head>
      <title>{overwrite ? title : `${t('app.name')} - ${title}`}</title>
      <meta content={title} property="og:name" />
    </Head>
  );
};

export { Title };
