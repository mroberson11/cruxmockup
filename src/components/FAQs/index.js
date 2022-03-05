import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const FAQs = () => {
  const data = {
    rows: [
      {
        title: "How do I get started?",
        content: `You can fill out our contact form to have a representive reach out to you within 24 hours, or you can call/text/email us at 601-345-1523/info@cruxsoftwaresolutions.com`,
      },
      {
        title: "What if I don't get results?",
        content:
          "If you're not happy, then we're not happy. We promise your new website/sales funnel will pay for itself, or we will work for FREE until it does. That's how committed we are to delivering results.",
      },
      {
        title: "How much does the service cost?",
        content:
          "We do not compete on price, we compete on value. Please, contact us to request a quote.",
      },
      {
        title: "What will my website look like?",
        content:
          "Similar to our own but with your own personal touch of course. Each website will be altered to fit the personality, culture, and needs of the business.",
      },
      {
        title: "Will I have to take care of the website myself?",
        content: `With the complexity involved in maintaining a website such as this one, it would be unreasonable to burden our clients with their own security updates, content changes, email configuration, and everything else that comes with owning a website. For this reason, we offer all of these benefits, web hosting, SSL certificates, & more for only $39.99 a month.`,
      },
      {
        title:
          "Why would I not just hire a cheap freelancer or make a WordPress site myself?",
        content: `As the saying goes, you get what you pay for. WordPress can be a great platform for alternative needs such as personal blogs, but it is extremely bulky, slow, and has a decent learning curve. Our focus is on creating a seamless sales funnel for your potential customers. Not on setting up a blog you'll have to create, promote, and maintain.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "#00FFEF",
    rowTitleColor: "#00FFEF",
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return <Faq data={data} styles={styles} config={config} />;
};

export default FAQs;
