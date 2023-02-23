//required packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//user prompts
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github user name?",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide the link to your Github profile",
      name: "profile",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please give a short description of your project?",
      name: "descrip",
    },
    {
      type: "list",
      message: "What license do you require?",
      choices: [
        "ApacheLicense2",
        "GNUv3",
        "MIT",
        "BSDSimplified",
        "BSD3Clause",
        "BoostSoftwareLicense1",
        "CreativeCommonsZerov1",
        "EclipsePublicLicense2",
        "GNUAGPL3",
        "GNUGPL2",
        "GNULGPL3",
        "Mozilla2",
        "TheUnlicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What are the main outside resources your project needs to run?",
      name: "dependency",
    },
    {
      type: "input",
      message: "How would a user /install/run this project/repo?",
      name: "install",
    },
    {
      type: "input",
      message: "How can a user contribute towards this project/repo?",
      name: "contribute",
    },
  ])

  //create README.md
  .then((data) => {
    fs.writeFile("SampleREADME.md", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log("README has been generated")
    );
  });
