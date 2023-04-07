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
} from "./constants";

import RPS from "../assets/projects/rock_paper_scissors.png";
import todo from "../assets/projects/todo.png";
import colorpicker from "../assets/projects/colorpicker.png";
import codepencil from "../assets/projects/codepencil.png";
import touch from "../assets/projects/touch.png";

export const ProjectDetails = [
  {
    name: "Color Picker",
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
    description:
      "This is clone version of codepen, where you can execute HTML, CSS, JavaScript code",
    stack: [react, scss],
    screenType: [laptop, desktop],
    image: codepencil,
    liveURL: "https://dev-codepencil.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/codepencil",
  },
  {
    name: "Todo App",
    description:
      "This is a simple todo application where we can track our tasks",
    stack: [react, tailwind],
    screenType: [mobile, tablet, laptop, desktop],
    image: todo,
    liveURL: "https://react-tailwind-todo-app.netlify.app/",
    githubURL: "https://github.com/visshnnu-tejaa-98/React-tailwind-todo-app",
  },

  {
    name: "Rock, Paper, Scissors",
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
    description:
      "This is an application which generates sound and leaves a position where you clicked the screen and vanishes",
    stack: [HTML, CSS, JS],
    screenType: [laptop, desktop],
    image: touch,
    liveURL: "https://dom-touch.netlify.app",
    githubURL: "https://github.com/visshnnu-tejaa-98/touch",
  },
];
