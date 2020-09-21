const Custom404 = () => <h1>404 - Page Not Found</h1>;

Custom404.getInitialProps = ({ res, err }) => ({
  namespacesRequired: ["common"],
  statusCode,
});

export default Custom404;
