// function to generate markdown for README
function generateMarkdown(data) { //do i need inverted back tick? //test npm tests
  return `# ${data.title}  

  ## Table of Contents
  - [Project Description] (#Description)
  - [Installation] (#How To Install)
  - [Usage] (#Usage)
  - [License] (#License)
  - [Contributing] (#Contributing)
  - [Tests] (#Tests) 
  - [Questions] (#Questions)

`;
}

module.exports = generateMarkdown;
