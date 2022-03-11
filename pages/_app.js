import { NextSeo } from "next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <NextSeo
    title="CRUX Software Solutions"
    titleTemplate="CRUX Software Solutions"
    defaultTitle="CRUX Software Solutions"
    description="CRUX Software Solutions is a premium web development agency specializing in the creation of lightning fast websites that are aesthetically pleasing. Search Engine Optimization & Business Lead Generation are at the heart of our service offerings."
    canonical="https://cruxsoftwaresolutions.com/"
    openGraph={{
      url: "https://cruxsoftwaresolutions.com/",
      title: "CRUX Software Solutions",
      description:
        "CRUX Software Solutions is a premium web development agency specializing in the creation of lightning fast websites that are aesthetically pleasing. Search Engine Optimization & Business Lead Generation are at the heart of our service offerings.",
      images: [
        {
          url: "../images/CompanyLogos/CompanyLogo.png",
          width: 800,
          height: 420,
          alt: "CRUX Software Solutions",
        },
      ],
    }}
    twitter={{
      handle: "@avneesh0612",
      site: "@avneesh0612",
      cardType: "summary_large_image",
    }}
  />;
  return <Component {...pageProps} />;
}

export default MyApp;
