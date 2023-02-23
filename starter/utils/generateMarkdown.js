function renderBadge(license) {
  let badge = "";
  if (license === "Apache License 2.0") {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === "GNU General Public License v3.0") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === "MIT License") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } else if (license === "Boost Software License 1.0") {
    badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`;
  } else if (license === "Eclipse Public License 2.0") {
    badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
  } else if (license === "GNU Affero General Public License v3.0") {
    badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
  } else if (license === "GNU General Public License v2.0") {
    badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
  } else if (license === "GNU Lesser General Public License v3 ") {
    badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
  } else if (license === "Mozilla Public License 2.0") {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  } else if (license === "The Unlicense") {
    badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  } else {
    badge = "";
    return badge;
  }
};

  // function to generate markdown for README
  function generateMarkdown(data) {
    return `
#${data.title} 

${renderBadge(data.license)}
  
## Description
${data.descrip} 

## Table of Contents
 
- [Installation](#Installation) 
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests) 
- [Questions](#Questions)

## Installation
  ${data.install} 

## Usage
  ${data.dependency} 

## License
  ${data.license} 

## Contributing
  ${data.contribute} 

## Tests

## Questions
  ${data.profile} 
  ${data.email}
  ${data.github} 
  
  
`;
  }
  module.exports = generateMarkdown;
