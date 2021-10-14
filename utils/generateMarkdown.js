function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

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
