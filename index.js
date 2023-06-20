var inquirer = require("inquirer");
const { type } = require("os");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "projectTitle",
      message: "What is the Title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the Description of the Project?",
    },
    {
      type: "input",
      name: "install",
      message: "Installation?",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?",
    },
    {
      type: "list",
      name: "license",
      message: "License?",
      choices: [
        "[Mit License]", "[Apache]", "[None]"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Are there any contribution rules?",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide test instructions, if applicable?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Questions",
    },
  ])
  .then((data) => {
    // Use user feedback for... whatever!!
    fs.writeFile("README.md", generateMarkdown(data), function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log(" README.md has been created!");
      }
    });
  })
    .catch(function(err) {
      console.log(err);
    });
    
