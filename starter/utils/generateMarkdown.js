

function renderBadge(license) {
  const badge = {
     ApacheLicense2:`![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
     GNUv3: `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
     MIT:`![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
     BSDSimplified: `!License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`,
     BSD3Clause: `!License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`,
     BoostSoftwareLicense1: `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`,
     CreativeCommonsZerov1: `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`,
     EclipsePublicLicense2: `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`,
     GNUAGPL3: `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`,
     GNUGPL2: `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`,
     GNULGPL3: `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`,
     Mozilla2: `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`,
     TheUnlicense: `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`,
  }
   return badge[license];
     };

function renderLicense(license) {
  const link = {
      ApacheLicense2:`(https://opensource.org/licenses/Apache-2.0)`,
      GNUv3: `(https://www.gnu.org/licenses/gpl-3.0)`,
      MIT:`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`,
      BSDSimplified: `(https://opensource.org/licenses/BSD-2-Clause)`,
      BSD3Clause: `(https://opensource.org/licenses/BSD-3-Clause)`,
      BoostSoftwareLicense1: `(https://www.boost.org/LICENSE_1_0.txt)`,
      CreativeCommonsZerov1: `(http://creativecommons.org/publicdomain/zero/1.0/)`,
      EclipsePublicLicense2: `(https://opensource.org/licenses/EPL-1.0)`,
      GNUAGPL3: `(https://www.gnu.org/licenses/agpl-3.0)`,
      GNUGPL2: `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
      GNULGPL3: `(https://www.gnu.org/licenses/lgpl-3.0)`,
      Mozilla2: `(https://opensource.org/licenses/MPL-2.0)`,
      TheUnlicense: `(http://unlicense.org/)`,
   }
    return link [license];
      };

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 

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
Terms and conditions for use, reproduction, and distribution can be found here: ${renderLicense(data.license)} 

## Contributing
  ${data.contribute} 

## Tests

## Questions
# Contact Me
- GitHub username: ${data.github} 
- GitHUb Profile:  ${data.profile} 
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;
