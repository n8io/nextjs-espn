import Head from "next/head";
import { useTranslate } from "../../../../shared/hooks";

const App = () => {
  const t = useTranslate("common");

  return (
    <>
      <Head>
        <title>{t("home")}</title>
      </Head>
      <span>{t("home")}</span>
    </>
  );
};

App.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export { App };
