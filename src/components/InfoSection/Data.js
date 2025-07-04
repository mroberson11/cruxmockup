import pic1 from "../../images/InfoImages/startup-life.svg";
import pic2 from "../../images/InfoImages/programming-behind.svg";
import pic3 from "../../images/InfoImages/contact-us.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Software Solution Providers",
  headline: "Our Process",
  description:
    "Step 1: Committment-Free Consultation Call \n Step 2: Requirements Gathering & Onboarding \n Step 3: Website Development \n Step 4: Website Review & Finalization \n Step 5: Google Business Optimization \n Step 6: Analytics Tracking & Website Optimization \n Step 7: Satisfaction Guaranteed or Your Money Back",
  buttonLabel: "View Pricing",
  imgStart: false,
  img: pic1,
  alt: "Man next to computer",
  dark: false,
  primary: false,
  darkText: true,
  pageLink: "pricing",
};

// export const homeObjTwo = {
//   id: "portfolio",
//   lightBg: true,
//   lightText: false,
//   lightTextDesc: false,
//   topLine: "Our Results",
//   headline: "The Crux Portfolio",
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
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Get in Touch",
  headline: "Still on the Fence?",
  description:
    "We understand not everyone enjoys talking on the phone. So, we've made it as convenient as possible to contact us with any method you prefer.",
  buttonLabel: "Contact Information",
  imgStart: false,
  img: pic3,
  alt: "Contact image",
  dark: false,
  primary: false,
  darkText: true,
  pageLink: "contact-info",
};
