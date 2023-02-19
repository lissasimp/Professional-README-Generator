// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
  
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
