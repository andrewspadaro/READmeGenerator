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
    }   

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
      .then(function(answers) {
     // console.log(JSON.stringify(answers, null, 2));
     generateMarkdown(answers)
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });
}

// function call to initialize program
init();
