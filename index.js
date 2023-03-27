// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

let myAnswers = {};

// Create an array of licenses
const licenses = [
  {
    key: "mit",
    name: "MIT",
  },
  {
    key: "lgpl-3.0",
    name: "LGPL",
  },
  {
    key: "mpl-2.0",
    name: "MPL",
  },
  {
    key: "agpl-3.0",
    name: "AGPL",
  },
  {
    key: "apache-2.0",
    name: "Apache",
  },
  {
    key: "gpl-3.0",
    name: "GPL",
  },
];

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want to name your project?",
    default: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "Define your project installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information for the project?",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Enter your contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "What are your test instructions?",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your GitHub email address",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: licenses,
  },
  {
    type: "input",
    name: "readme",
    message: "What do you want to name your README file?",
    default: "README.md",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
      console.log(`Check ${fileName} for your generated README file!`);
    }
  });
}

const getAvailableLicenses = () => {};

const askQuestions = (questions) => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log("Thank you for your answers!");
      console.log("Here are the answers you provided:");
      console.log(answers);
      const generate = inquirer
        .prompt({
          type: "confirm",
          name: "confirm",
          message: "Are you sure you want to generate the README?",
          default: true,
        })
        .then((confirm) => {
          if (confirm) {
            // licenses.find((license) => {
            //   answers.license = license.spdx_id;
            // });
            console.log("Generating README...");
            const generated = generateMarkdown(answers);
            writeToFile(answers.readme, generated);
          } else {
            console.log("No README was generated, have a nice day!");
          }
        });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(
          "Error: Prompt couldn't be rendered in the current environment"
        );
      } else {
        // Something else went wrong
        console.log("Error: Something else went wrong", error);
      }
    });
};

// Create a function to initialize app
function init() {
  console.log("Welcome to the README Generator!");
  console.log("Please answer the following questions:");
  console.log("=====================================");
  askQuestions(questions);
}

// Function call to initialize app
init();

// SOURCES:
// https://docs.github.com/en/rest/licenses?apiVersion=2022-11-28
// https://www.npmjs.com/package/inquirer
