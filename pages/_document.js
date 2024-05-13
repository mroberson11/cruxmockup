import Favicon from "../src/components/Favicon";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
          <meta
            property="og:title"
            content="Crux Software Solutions - Mississippi Web Design"
            key="title"
          />
          <meta
            name="description"
            content="Crux Software Solutions is a Mississippi based agency specializing in SEO services to increase organic lead generation for small businesses through website design, website development, & optimization."
          />
          <meta
            name="keywords"
            content="Web Design, Website Designer Mississippi, Website Developer, SEO, SEO services, SEO near me, Web Design, Web Agency, Lead Generation"
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
