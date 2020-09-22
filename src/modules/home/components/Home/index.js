import styled from "styled-components";
import { App } from "../../../../modules/app";
import { Meta } from "../../../../shared/components";
import { I18nNamespace, SeasonType } from "../../../../shared/constants";
import { useTranslate } from "../../../../shared/hooks";
import { Section } from "./Section";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const Home = ({ categories }) => {
  const t = useTranslate(I18nNamespace.CATEGORIES);

  return (
    <App>
      <Meta.Title title={t("home")} />
      <Container>
        {categories.map((category) => (
          <Section
            key={category.name}
            players={category.leaders}
            title={t(category.name)}
          />
        ))}
      </Container>
    </App>
  );
};

Home.getInitialProps = async () => {
  const url = new URL(
    "/apis/site/v3/sports/football/nfl/leaders",
    "https://site.web.api.espn.com"
  );

  url.searchParams.set("lang", "en");
  url.searchParams.set("limit", 5);
  url.searchParams.set("seasonType", SeasonType.REGULAR_SEASON);
  url.searchParams.set("season", 2020);

  const data = await fetch(url.href).then((res) => res.json());
  const categories = data?.leaders?.categories;

  return { categories, namespacesRequired: [I18nNamespace.CATEGORIES] };
};

export default Home;
