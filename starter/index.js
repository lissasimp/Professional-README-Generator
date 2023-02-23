const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt ([
      {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please provide the link to your Github profile',
        name: 'profile',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please give a short description of your project?',
        name: 'descrip',
      },
      {
        type: 'list',
        message: 'What license do you require?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
        'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
        'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
        // filter(licenseVal) {
        //     return licenseVal
        },
      // },
      {
        type: 'input',
        message: 'What are the main outside resources your project needs to run?',
        name: 'dependency',
      },
      {
        type: 'input',
        message: 'How would a user /install/run this project/repo?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'How can a user contribute towards this project/repo?',
        name: 'contribute',
      },
    ])
    .then((data) => {
      fs.writeFile('README.md', generateMarkdown(data), (err) => err ? console.log(err) : console.log("README has been generated")
      );
    })


    


// // function to write 
//   function writeToFile (filename, data) {
    
//   };


// // function to initialize program
// function init() {
// inquirer.prompt(userInput). then((response) => {
//   console.log("Creating README.md");
//   writeToFile("README.md", generateMarkdown({response}));
// });
// }

// // function call to initialize program
// init();

// GNU General Public License v2.0 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// GNU Lesser General Public License v3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
// Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

