// TODO: Include packages needed for this application
const inquirer = require("inquirer");

let myAnswers = {};

// Create an array of licenses
const licenses = [
  {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://api.github.com/licenses/mit",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "lgpl-3.0",
    name: "GNU Lesser General Public License v3.0",
    spdx_id: "LGPL-3.0",
    url: "https://api.github.com/licenses/lgpl-3.0",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "mpl-2.0",
    name: "Mozilla Public License 2.0",
    spdx_id: "MPL-2.0",
    url: "https://api.github.com/licenses/mpl-2.0",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "agpl-3.0",
    name: "GNU Affero General Public License v3.0",
    spdx_id: "AGPL-3.0",
    url: "https://api.github.com/licenses/agpl-3.0",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "unlicense",
    name: "The Unlicense",
    spdx_id: "Unlicense",
    url: "https://api.github.com/licenses/unlicense",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "apache-2.0",
    name: "Apache License 2.0",
    spdx_id: "Apache-2.0",
    url: "https://api.github.com/licenses/apache-2.0",
    node_id: "MDc6TGljZW5zZW1pdA==",
  },
  {
    key: "gpl-3.0",
    name: "GNU General Public License v3.0",
    spdx_id: "GPL-3.0",
    url: "https://api.github.com/licenses/gpl-3.0",
    node_id: "MDc6TGljZW5zZW1pdA==",
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
    name: "motivation",
    message: "What was your motivation?",
  },
  {
    type: "input",
    name: "why",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "problem",
    message: "What problem does it solve?",
  },
  {
    type: "input",
    name: "learned",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "standout",
    message: "What makes your project stand out?",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: licenses,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const getAvailableLicenses = () => {};

const askQuestions = (questions) => {
  answers = inquirer
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
            myAnswers = answers;
            console.log("Generating README...");
          } else {
            console.log("No README was generated, have a nice day!");
            askQuestions(questions);
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
        console.log("Error: Something else went wrong");
      }
    });
};

// TODO: Create a function to initialize app
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
