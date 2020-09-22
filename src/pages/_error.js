import ErrorPage from "next/error";
import { useTranslate } from "../shared/hooks";

const Error = ({ statusCode }) => {
  const t = useTranslate("common");
  let key = "thisPageCouldNotBeFound";

  switch (statusCode) {
    case 404:
      key = "thisPageCouldNotBeFound";
      break;
    default:
      key = "anErrorOccurred";
      break;
  }

  return <ErrorPage statusCode={statusCode} title={t(key)} />;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { namespacesRequired: ["common"], statusCode };
};

export default Error;
