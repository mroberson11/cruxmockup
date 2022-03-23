import "../styles/globals.css";
import { NextSeo } from "next-seo";

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
          url: "../images/CompanyLogos/OpenGraphPic.png",
          width: 800,
          height: 420,
          alt: "CRUX Software Solutions",
        },
      ],
    }}
  />;
  return <Component {...pageProps} />;
}

export default MyApp;
