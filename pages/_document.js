import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Favicon from "../src/components/Favicon";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <meta
            name="google-site-verification"
            content="aTOluMyzrlfVjo8rtl8BYY8kUq1CYpCB4DPcRVoRQms"
          />
          <title>CRUX Software Solutions</title>
          <meta
            property="og:title"
            content="CRUX Software Solutions"
            key="title"
          />
          <meta name="title" content="CRUX Software Solutions" />
          <meta
            name="description"
            content="CRUX Software Solutions is a premium web development agency specializing in the creation of lightning fast websites that are aesthetically pleasing."
          />
          <meta
            name="keywords"
            content="Web Design, Web Agency, Lead Generation"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
