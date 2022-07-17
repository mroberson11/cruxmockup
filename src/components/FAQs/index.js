import React from "react";
import Faq from "react-faq-component";

const FAQs = () => {
  const data = {
    rows: [
      {
        title: "How do I get started?",
        content: `You can fill out our contact form to have a representive reach out to you within 24 hours, or you can text/email us at 601-345-1523/info@cruxsoftwaresolutions.com`,
      },
      {
        title: "What if I don't get results?",
        content:
          "If you're not happy, then we're not happy. We promise your new website/sales funnel will pay for itself, or we will work for FREE until it does. That's how committed we are to delivering results.",
      },
      {
        title: "Will I have to take care of the website myself?",
        content: `With the complexity involved in maintaining a website such as this one, it would be unreasonable to burden our clients with their own security updates, content changes, email configuration, and everything else that comes with owning a website. For this reason, we offer all of these benefits, web hosting, SSL certificates, & more in our maintenance package.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "var(--faqText)",
    rowTitleColor: "var(--faqText)",
  };

  const config = {
    animate: true,
  };

  return <Faq data={data} styles={styles} config={config} />;
};

export default FAQs;
