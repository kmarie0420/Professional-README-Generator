var inquirer = require("inquirer");
const { type } = require("os");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "input_type",
      message: "Title?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Description?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Table of Contents?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Installation?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Usage?",
    },
    {
      type: "input",
      name: "input_type",
      message: "License?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Contributing?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Tests?",
    },
    {
      type: "input",
      name: "input_type",
      message: "Questions",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
