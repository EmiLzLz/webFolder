import appImg1 from "../assets/listApp.PNG";
import appImg2 from "../assets/nodeSqlApp.png";
import appImg3 from "../assets/seriesSearcherApp.PNG";
import appImg4 from "../assets/webFolder.PNG";

/* This code exports an array of objects containing data about different projects. Each object
represents a project and includes its name, an image, a description, a link to its source code, and
a link to view the project. */
export const projectsData = [
  {
    name: "List app with JS",
    image: appImg1,
    description:
      "HTML, CSS, and JS were used to create this app. The software records the products or things that the user enters (name, price, and quantity), and then displays this information in a card. The user can also remove the product's card or modify the product's status (to bought, lacking, or not available). This was accomplished by utilizing localStorage.",
    code: "https://github.com/EmiLzLz/listApp",
    view: "https://emilzlz.github.io/listApp/",
  },
  {
    name: "Nodejs and MySQL app to save vacanncies",
    image: appImg2,
    description:
      "My first application using Node.js and MySQL was this one. The app's objective is to save all the job openings for which I apply and allow me to view them as cards. Each card has a title, a description, a link to the job posting, and two options to update or delete the card. I gained a lot of node.js knowledge through this app, including how to configure my app server, create the app's endpoints and views, and link the project to a MySQL database. I couldn't find a way to deploy it right now. Therefore, I made a public album where you may see various app screenshots.",
    code: "https://github.com/EmiLzLz/jobKeeper",
    view: "https://imageshack.com/a/73TW7/1",
  },
  {
    name: "TV series searcher with React and TailwindCSS",
    image: appImg3,
    description:
      "a React project that gives users access to data on a variety of series, such as summaries, statuses, ratings, networks, and more. With this project, I gained knowledge of states, conditional rendering, props, and the use of an api in React with a helper to send HTTP requests using an endpoint and options for GET, POST, PUT, or DELETE methods.",
    view: "https://emilzlz.github.io/seriesSearcher/",
  },
  {
    name: "This web folder with React and TailwindCSS",
    image: appImg4,
    description:
      "React was used to create this web folder, and Tailwind CSS was used to style it. The view button will take you to a public album where i put captures of the figma file where i created the light and dark view of the project. I discovered how to create a form with validations to display mistakes and a response once the form is submitted using this project. I handled these states using a unique hook that I created to accomplish this. Additionally, I used states to create the slider, the page theme change button, and the top-scrolling window button.",
    code: "https://github.com/EmiLzLz/webFolder",
    view: "https://www.figma.com/invites/claim/QhFBzSgryrj8sq2ahrLdIz6ITOtzXaZR2d3p1K3fLpNo",
  },
];
