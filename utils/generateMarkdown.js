// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
    ${data.description}

  ### Table Of Contents

  1. [Intsallation](#installation)
  
  2. [Usage](#usage)

  3. [Contributing](#contributing)

  4. [Tests](#tests)

  5. [License](#license)

  6. [Github](#github)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Github Username
  ${data.github}


`;
}

module.exports = generateMarkdown;
