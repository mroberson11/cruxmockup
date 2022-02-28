import pic1 from "../../images/InfoImages/startup-life.svg";
import pic2 from "../../images/InfoImages/programming-behind.svg";
import pic3 from "../../images/InfoImages/pair-programming.svg";
import pic4 from "../../images/InfoImages/seo.svg";
import pic5 from "../../images/InfoImages/contact-us.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Software Solution Providers",
  headline: "Front-End Development",
  description:
    "We are Software Solution providers who specialize in Web Development, Lead Generation, and Search Engine Optimization.",
  buttonLabel: "Learn More",
  imgStart: false,
  img: pic1,
  alt: "Man next to computer",
  dark: true,
  primary: true,
  darkText: false,
  pageLink: "",
};

// export const homeObjTwo = {
//   id: "portfolio",
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: "Our Results",
//   headline: "The CRUX Portfolio",
//   description:
//     "Explore the results we've been able to provide for existing customers & their honest feedback",
//   buttonLabel: "Transformations",
//   imgStart: true,
//   img: pic2,
//   alt: "Programmer from behind",
//   dark: false,
//   primary: false,
//   darkText: true,
//   pageLink: "contact",
// };

export const homeObjTwo = {
  id: "why",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Why Us?",
  headline: "Speed is King",
  description:
    "Read any article related to SEO, customer conversion, or user experience, and you're guaranteed to come across the importance of a website's speed. The average website load time is 10 seconds. Our average is less than two seconds for desktop & mobile.",
  buttonLabel: "Test Your Speed",
  imgStart: true,
  img: pic2,
  alt: "Programmer from behind",
  dark: false,
  primary: false,
  darkText: true,
  pageLink: "https://www.dotcom-tools.com/website-speed-test",
};

export const homeObjThree = {
  id: "information",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Get in Touch",
  headline: "Start Your Journey",
  description:
    "Get in touch with us today in order to learn how we can customize a solution that is guaranteed to meet your needs & revolutinize your online presence. We are available for calls, texts, emails, and through our online contact form.",
  buttonLabel: "Contact Information",
  imgStart: false,
  img: pic5,
  alt: "Contact image",
  dark: true,
  primary: true,
  darkText: false,
  pageLink: "contact-info",
};
