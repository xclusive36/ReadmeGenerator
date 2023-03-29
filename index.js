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

// unction to write README file
function writeToFile(fileName, data) { // Write file
  fs.writeFile(fileName, data, (err) => { // Write file
    if (err) { // If there is an error
      console.log(err); // Log the error
    } else { // If there is no error
      console.log("Success!"); // Log success
      console.log(`Check ${fileName} for your generated README file!`); // Log success
    }
  });
}

const askQuestions = (questions) => { // Ask questions
  inquirer // Use inquirer
    .prompt(questions) // Prompt questions
    .then((answers) => { // Use user feedback for... whatever!!
      console.log("Thank you for your answers!"); // Log success
      console.log("Here are the answers you provided:"); // Log success
      console.log(answers); // Log answers
      const generate = inquirer // Use inquirer
        .prompt({ // Prompt questions
          type: "confirm",
          name: "confirm",
          message: "Are you sure you want to generate the README?",
          default: true,
        })
        .then((confirm) => { // Use user feedback for... whatever!!
          if (confirm) { // If user confirms
            console.log("Generating README..."); // Log success
            const generated = generateMarkdown(answers); // Generate README
            writeToFile(answers.readme, generated); // Write README
          } else { // If user does not confirm
            console.log("No README was generated, have a nice day!"); // Log result
          }
        });
    })
    .catch((error) => { // If there is an error
      if (error.isTtyError) { // Prompt couldn't be rendered in the current environment
        console.log(
          "Error: Prompt couldn't be rendered in the current environment"
        ); // Log error
      } else { // Something else went wrong
        console.log("Error: Something else went wrong", error); // Log error
      }
    });
};

// Function to initialize app
function init() { // Initialize app
  console.log("Welcome to the README Generator!"); // Log welcome
  console.log("Please answer the following questions:"); // Log instructions
  console.log("=====================================");
  askQuestions(questions); // Ask questions
}

// Function call to initialize app
init();

// SOURCES:
// https://docs.github.com/en/rest/licenses?apiVersion=2022-11-28
// https://www.npmjs.com/package/inquirer
