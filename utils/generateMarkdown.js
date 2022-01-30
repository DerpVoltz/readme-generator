// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Mozilla') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const contributing = (data, toc) => {
  if (data.contributing && !toc) {
    return '## Contributing';
  } else if (toc) {
    return '* [Contributing](#Contributing)';
  }
}

const installation = (data, toc) => {
  if (data.installation && !toc) {
    return '## Installation';
  } else if (toc) {
    return '* [Installation](#Installation)';
  }
}

const tests = (data, toc) => {
  if (data.tests && !toc) {
    return '## Tests';
  } else if (toc) {
    return '* [Tests](#Tests)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${installation(data, 'toc')}
  * [Usage](#Usage)
  ${contributing(data, 'toc')}
  ${tests(data, 'toc')}
  * [Questions](#Questions)

  ${installation(data)}
  ${data.installation}
  ## Usage
  ${data.usage}
  ${contributing(data)}
  ${data.contributing}
  ${tests(data)}
  ${data.tests}
  ## Questions
  ${data.username}, [GitHub](${data.github}), ${data.email}
`;
}

module.exports = generateMarkdown;
