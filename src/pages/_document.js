import { lngFromReq } from "next-i18next/dist/commonjs/utils";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static getInitialProps(context) {
    const lng = lngFromReq(context.req);

    const { renderPage } = context;
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, lng, styleTags };
  }

  render() {
    const { lng, isRTL } = this.props;

    return (
      <Html lang={lng} dir={isRTL ? "rtl" : "ltr"}>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
