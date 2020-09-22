import Head from 'next/head';

import { useTranslate } from '../../../hooks';

const Title = ({ overwrite = false, title }) => {
  const t = useTranslate();

  return (
    <Head>
      <title>{overwrite ? title : `${t('appName')} - ${title}`}</title>
    </Head>
  );
};

export { Title };
