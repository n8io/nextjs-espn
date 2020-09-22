import styled from 'styled-components';

import { Meta } from 'src/shared/components';
import { I18nNamespace, SeasonType } from 'src/shared/constants';
import { useTranslate } from 'src/shared/hooks';

import { Section } from './Section';

const getOrigin = (context) => {
  const { req } = context;
  let origin = null;

  if (req) {
    origin = `http://${req.headers.host}`;
  } else {
    origin = window.location.origin;
  }

  return origin;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Home = ({ categories, origin }) => {
  const t = useTranslate(I18nNamespace.CATEGORIES);

  return (
    <>
      <Meta.CanonicalLink href="/" origin={origin} />
      <Meta.Description description={t('app.description')} />
      <Meta.Title title={t('pageTitle.home')} />
      <Container>
        {categories.map((category) => (
          <Section
            key={category.name}
            players={category.leaders}
            title={t(category.name)}
          />
        ))}
      </Container>
    </>
  );
};

Home.getInitialProps = async (context) => {
  const url = new URL(
    '/apis/site/v3/sports/football/nfl/leaders',
    'https://site.web.api.espn.com'
  );

  url.searchParams.set('lang', 'en');
  url.searchParams.set('limit', 5);
  url.searchParams.set('seasonType', SeasonType.REGULAR_SEASON);
  url.searchParams.set('season', 2020);

  const data = await fetch(url.href).then((res) => res.json());
  const categories = data?.leaders?.categories;

  return {
    categories,
    namespacesRequired: [I18nNamespace.CATEGORIES],
    origin: getOrigin(context),
  };
};

export default Home;
