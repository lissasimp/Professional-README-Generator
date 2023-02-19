const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


    inquirer
    .prompt([
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

  .then((response) => {

    console.log(response)
    fs.writeFileSync("README.md", generateMarkdown(response))
  });

    




// function to write README file
// function writeToFile(fileName, data) {
  
// );

// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GNU General Public License v3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// MIT License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// BSD 2-Clause "Simplified" License [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
// BSD 3-Clause "New" or "Revised" License [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// Creative Commons Zero v1.0 Universal [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
// Eclipse Public License 2.0 [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// GNU Affero General Public License v3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
// GNU General Public License v2.0 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// GNU Lesser General Public License v3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
// Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

