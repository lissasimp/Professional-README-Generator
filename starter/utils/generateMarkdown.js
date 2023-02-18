// function to generate markdown for README
function generateMarkdown(data) { //do i need inverted back tick? //test npm tests //title needs to be dynamically generated
  return `# ${data.title} 

  ## Title 
  
  ## Description

  ## Table of Contents
 
  - [Installation] (#installation)
  - [Usage] (#Usage)
  - [License] (#License)
  - [Contributing] (#Contributing)
  - [Tests] (#Tests) 
  - [Questions] (#Questions)

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
