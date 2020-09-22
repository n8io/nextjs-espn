import Head from 'next/head';

const CanonicalLink = ({ href = '', origin }) => {
  const isRelative = href.indexOf('://') === -1;

  let path = null;

  if (isRelative) {
    const url = new URL(href, origin);

    path = url.href;
  } else {
    path = href;
  }

  if (path.endsWith('/')) {
    path = path.replace(/\/$/, '');
  }

  return (
    <Head>
      <link href={path} rel="canonical" />
    </Head>
  );
};

export { CanonicalLink };
