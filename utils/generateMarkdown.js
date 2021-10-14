// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README (for each section)
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table Content
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Collaborators](#Collaborators)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  To install necessary dependencies, run the following command:
  ${data.installationProcess}

  ## Usage
  ${data.usage}

  ## Collaborators
  <${data.collaborators}>

  ## Tests
  To run tests, run the following command:

  ${data.tests}

  ## Questions
  If you have any questions about the repo, contact me directly at: ${
    data.questions
  }
`;
}

module.exports = generateMarkdown;
