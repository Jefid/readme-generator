const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  if (!data.license) {
    return ``
  } else {
    return `
    ## License'
    <a href="https://opensource.org/licenses/${data.license}">
    `
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}
## License
<a href='https://opensource.org/licenses/${data.license}'>
<img src='https://img.shields.io/badge/License-${data.license}-blue.svg' />
</a>
## Table of Contents
  
[Installation](#installation)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>
----
## Installation
${data.installation}

## Usage
${data.usage}
${renderContrib(data)}
${renderTests(data)}
----
## Questions
Feedback and questions are always welcome!
[Github](https://github.com/${data.github})
[Email](mailto:${data.email})
`
};


module.exports = generateMarkdown;
