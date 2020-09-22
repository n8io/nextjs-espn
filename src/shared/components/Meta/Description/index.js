import Head from 'next/head';

const Description = ({ description }) => (
  <Head>
    <meta content={description} name="description" />
    <meta content={description} property="og:description" />
  </Head>
);

export { Description };
