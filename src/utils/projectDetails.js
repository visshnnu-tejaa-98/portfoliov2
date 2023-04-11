import {
  HTML,
  JS,
  CSS,
  desktop,
  laptop,
  mobile,
  react,
  scss,
  tablet,
  tailwind,
  frontEnd,
  Vanella,
  html,
  css,
} from "./constants";

import RPS from "../assets/projects/rock_paper_scissors.png";
import todo from "../assets/images/todo.png";
import colorpicker from "../assets/images/colorpicker.png";
import codepencil from "../assets/projects/codepencil.png";
import touch from "../assets/projects/touch.png";
import vscode from "../assets/images/vscode.png";
import beats from "../assets/images/beats.png";
import realestate from "../assets/images/realestate.png";
import gaming from "../assets/images/gaming.png";
import hostingSite from "../assets/images/hostingSite.png";
import creditCard from "../assets/images/creditCard.png";
import dataAnatitics from "../assets/images/dataAnatitics.png";
import googleMaps from "../assets/images/googleMaps.png";
import ticTacToe from "../assets/images/ticTacToe.png";
import calculator from "../assets/images/calculator.png";

export const ProjectDetails = [
  {
    name: "Color Picker",
    category: [frontEnd, react],
    description:
      "This is an Application where you can copy your desired color just a click away.",
    stack: [react, tailwind],
    screenType: [mobile, tablet, laptop, desktop],
    image: colorpicker,
    liveURL: "https://dev-color-picker.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/color-picker",
  },
  {
    name: "Codepencil",
    category: [frontEnd, react],
    description:
      "This is codepen clone, where you can execute HTML, CSS, JavaScript code",
    stack: [react, scss],
    screenType: [laptop, desktop],
    image: codepencil,
    liveURL: "https://dev-codepencil.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/codepencil",
  },
  {
    name: "Todo App",
    category: [frontEnd, react],
    description:
      "This is a simple todo application where we can track our tasks",
    stack: [react, tailwind],
    screenType: [mobile, tablet, laptop, desktop],
    image: todo,
    liveURL: "https://react-tailwind-todo-app.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/React-tailwind-todo-app",
  },
  {
    name: "Google Maps Clone",
    category: [frontEnd, react],
    description:
      "This is a simple todo application where we can search distance between 2 places and navigate",
    stack: [react],
    screenType: [mobile, tablet, laptop, desktop],
    image: googleMaps,
    liveURL: "https://visshnnu-google-maps-clone.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/googl-maps-clone-react",
  },
  {
    name: "Rock, Paper, Scissors",
    category: [frontEnd, react],
    description: "This is simple game to play Rock, Paper, Scissors",
    stack: [react, tailwind],
    screenType: [tablet, laptop, desktop],
    image: RPS,
    liveURL: "https://react-tailwind-rock-paper-sissors.netlify.app",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/react-tailwind-rock-papers-sissors",
  },
  {
    name: "Touch",
    category: [Vanella],
    description: "This is an application which will interacts to your clicks",
    stack: [HTML, CSS, JS],
    screenType: [mobile, tablet, laptop, desktop],
    image: touch,
    liveURL: "https://dom-touch.netlify.app",
    githubURL: "https://github.com/visshnnu-tejaa-98/touch",
  },
  {
    name: "Tic Tac Toe",
    category: [Vanella],
    description:
      "This is an application where 2 players can play tic-tac-toe game",
    stack: [HTML, CSS, JS],
    screenType: [mobile, tablet, laptop, desktop],
    image: ticTacToe,
    liveURL: "https://visshnnu-tic-tac-toe.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/tic-tac-toe",
  },
  {
    name: "Calculator",
    category: [Vanella],
    description:
      "This is an application where 2 players can play tic-tac-toe game",
    stack: [HTML, CSS, JS],
    screenType: [mobile, tablet, laptop, desktop],
    image: calculator,
    liveURL: "https://calculator-js-dom-project.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/calculator",
  },
  {
    name: "Hosting Site Landing Page",
    category: [html, css],
    description:
      "This is a Simple Application developed using HTML, CSS and Tailwind CSS",
    stack: [HTML, CSS, tailwind],
    screenType: [mobile, tablet, laptop, desktop],
    image: hostingSite,
    liveURL: "https://html-css-tailwind-hosting-cite.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-tailwind-hosting-site",
  },
  {
    name: "Data Analitics Landing Page",
    category: [html, css],
    description:
      "This is a Simple Application developed using HTML, CSS and Tailwind CSS",
    stack: [HTML, CSS],
    screenType: [mobile, tablet, laptop, desktop],
    image: dataAnatitics,
    liveURL: "https://html-css-data-analitics-landing-page.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-data-analitics-landing-page",
  },
  {
    name: "VS Code Website Clone",
    category: [html, css],
    description:
      "This is a Simple Application developed using HTML, CSS and Tailwind CSS",
    stack: [HTML, CSS, tailwind],
    screenType: [laptop, desktop],
    image: vscode,
    liveURL: "https://tailwind-vscode-clone.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/touch",
  },
  {
    name: "Beats Landing Page",
    category: [html, css],
    description: "This is a Simple Application developed using HTML and CSS",
    stack: [HTML, CSS],
    screenType: [laptop, desktop],
    image: beats,
    liveURL: "https://html-css-beats-landing-page.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-beats-landing-page",
  },
  {
    name: "Realestate Landing Page",
    category: [html, css],
    description: "This is a Simple Application developed using HTML and CSS",
    stack: [HTML, CSS],
    screenType: [laptop, desktop],
    image: realestate,
    liveURL: "https://html-css-realestate-landing-page.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-realestate-landing-page",
  },
  {
    name: "Gaming Landing Page",
    category: [html, css],
    description: "This is a Simple Application developed using HTML and CSS",
    stack: [HTML, CSS],
    screenType: [laptop, desktop],
    image: gaming,
    liveURL: "https://html-css-gaming-landing-page.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-gaming-landing-page",
  },
  {
    name: "Credit Card Landing Page",
    category: [html, css],
    description: "This is a Simple Application developed using HTML and CSS",
    stack: [HTML, CSS, tailwind],
    screenType: [laptop, desktop],
    image: creditCard,
    liveURL: "https://html-css-tailwind-credit-card.netlify.app/",
    githubURL:
      "https://github.com/visshnnu-tejaa-98/html-css-tailwind-credit-card",
  },
];
