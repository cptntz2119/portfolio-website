import typingDuel from "../src/Assets/typingDuel.png";
import interviewScheduler from "../src/Assets/interviewScheduler.png";
import jungle from "../src/Assets/jungle.png";
import tweeter from "../src/Assets/tweeter.png";
import wikimap from "../src/Assets/wikimap.png";
import portfolio from "../src/Assets/portfolio.png";

export const SKILLS = [
  { name: "ReactJS", initialRating: 4 },
  { name: "Redux", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Express", initialRating: 3 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "PostgreSQL", initialRating: 4 },
  { name: "MongoDB", initialRating: 3 },
  { name: "Socket.io", initialRating: 4 },
  { name: "Ruby on Rails", initialRating: 4 },
  { name: "Github", initialRating: 4 },
  { name: "AWS", initialRating: 2 },
  { name: "JAVA", initialRating: 2 },
];

export const PROJECTS = [
  {
    image: typingDuel,
    name: "Typing Duel",
    technologyUsed:
      "ReactJS, Javascript, Ruby on Rails, Express, PostgreSQL, Socket.io",
    description:
      "Typing duel is an Single Page app that allows you to practice typing and optionally compete with other users.",
    url: "https://github.com/cptntz2119/LHL_final_typing_duel",
  },
  {
    image: interviewScheduler,
    name: "interviewScheduler",
    technologyUsed:
      " React, Express, Webpack, Babel, Axios, WebSockets, PostgreSQL,Storybook, Jest, Testing library",
    description: "This is an single page interview scheduling app (SPA).",
    url: "https://github.com/cptntz2119/scheduler",
  },
  {
    image: jungle,
    name: "jungle",
    technologyUsed: "Ruby on Rails, PostgreSQL,Stripe",
    description: "This is a mini e-commerce application built with Rails 4.2 ",
    url: "https://github.com/cptntz2119/jungle-rails",
  },
  {
    image: tweeter,
    name: "tweeter",
    technologyUsed: "Express,Node, HTML, CSS, Javascript, jQuery, and AJAX",
    description: "Tweeter is a simple, single-page Twitter clone. ",
    url: "https://github.com/cptntz2119/tweeter",
  },
  {
    image: wikimap,
    name: "wikimap",
    technologyUsed: "EJS, NodeJS, Express, Ajax, SASS, PostgreSQL",
    description:
      "A web app that allows users to collaboratively create maps which list multiple interested location with google map API",
    url: "https://github.com/cptntz2119/MyMapMarker",
  },
  {
    image: portfolio,
    name: "portfolio",
    technologyUsed:
      "HTML, CSS, JS, React for front-end , and Node, Express for back-end.",
    description: "A SPA portfolio web",
    url: "https://github.com/cptntz2119/Personal-website/tree/main/portfolio-website",
  },
];
export default PROJECTS;
