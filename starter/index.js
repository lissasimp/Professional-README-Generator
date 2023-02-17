const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const data = [
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please give a short description of your project?',
        name: 'descrip',
      },
      {
        type: 'checkbox',
        message: 'What license do you require?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
        'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
      },
      {
        type: 'input',
        message: 'Please give a short description of your project?',
        name: 'descrip',
      },
    ])
    .then((response) => {
      console.log(`Name: ${response.name} 
  knows these languages: ${response.languages} 
  and preferred method of communication is ${response.comms}.`);
    })
];

// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });



// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// fs.writeFile(README.txt, ), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
