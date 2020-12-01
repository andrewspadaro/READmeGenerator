// array of questions for use
var inquirer = require('inquirer');
var generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')
const path = require('path')

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?"
  },
  {
    type: "input",
    name: "description",
    message: "Enter a short description about your project"
  },
  {
    type: "input",
    name: "installation",
    message: "enter instilation instructions"
  },
  {
    type: "input",
    name: "usage",
    message: "enter usage instructions"
  },
  {
    type: "input",
    name: "contributing",
    message: "enter contribution instructions"
  },
  {
    type: "input",
    name: "tests",
    message: "testing instructions"
  },
  {
    type: "list",
    name: "license",
    message: "choose a license",
    choices: ["NONE", "MIT", "APACHE 2.0"]
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username"
  },





];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      // console.log(JSON.stringify(answers, null, 2));

      writeToFile('README.md', generateMarkdown({...answers}))
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function call to initialize program
init();
