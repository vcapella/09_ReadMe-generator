// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title:",
    default: "Your-Project-Title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
    default: "Your-Project-Description",
  },
  {
    type: "input",
    name: "installationProcess",
    message: "Please describe the the steps required to install your project",
    default:
      "Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Add usage information",
    default:
      "Run ```node index.js``` in the terminal and answer the required questions.",
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    default: "https://github.com/vcapella",
  },
  {
    type: "input",
    name: "tests",
    message: "Insert the commands to test your program",
    default: "```npm test```",
  },
  {
    type: "input",
    name: "questions",
    message: "Insert an e-mail for contact",
    default: "mailme@mail.com",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
