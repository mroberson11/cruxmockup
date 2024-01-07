import React from "react";
import Head from "next/head";

const CruxHead = ({ title }) => {
  return (
    <>
      <Head title={title}>
        <meta property="og:title" content={title} key="title" />
        <meta
          name="description"
          content="Crux Software Solutions is a Mississippi based agency specializing in SEO services to increase organic lead generation for small businesses through website development & optimization."
        />
        <meta
          name="keywords"
          content="SEO, SEO services, SEO near me, Web Design, Web Agency, Lead Generation"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>{title}</title>
      </Head>
    </>
  );
};

export default CruxHead;
