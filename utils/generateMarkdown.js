// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'GNU General Public License v3.0') {
    return '[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[https://choosealicense.com/licenses/mpl-2.0/](https://choosealicense.com/licenses/mpl-2.0/)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This repository is cover under the ${license} you can read about it at: ${renderLicenseLink(license)}`;
}

const contributing = (data, toc) => {
  const contributing = data.contributing;
  if (contributing && !toc) {
    return `
  ## Contributing`;
  } else if (contributing && toc) {
    return `
  * [Contributing](#Contributing)`;
  } else {
    return '';
  }
}

const installation = (data, toc) => {
  const installation = data.installation;
  if (installation && !toc) {
    return `
  ## Installation`;
  } else if (installation && toc) {
    return `
  * [Installation](#Installation)`;
  } else {
    return'';
  }
}

const tests = (data, toc) => {
  const tests = data.tests
  if (tests && !toc) {
    return `
  ## Tests`;
  } else if (tests && toc) {
    return `
  * [Tests](#Tests)`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  return `# ${data.title} ${renderLicenseBadge(license)}
  ## Description
  ${data.description}
  ## Table of Contents${installation(data, 'toc')}
  * [Usage](#Usage)${contributing(data, 'toc')}${tests(data, 'toc')}
  * [License](#License)
  * [Questions](#Questions)
  ${installation(data)}
  ${data.installation}
  ## Usage
  ${data.usage}${contributing(data)}
  ${data.contributing}${tests(data)}
  ${data.tests}
  ## License
  ${renderLicenseSection(license)}
  ## Questions
  You can contact me From;

  My GitHub Username: ${data.username}

  My GitHub Profile: [GitHub](${data.github})

  My Email: ${data.email}
`;
}

module.exports = generateMarkdown;
