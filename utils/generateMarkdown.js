const licenses = [
  {
    key: "MIT",
    url: "https://api.github.com/licenses/mit",
  },
  {
    key: "LGPL",
    url: "https://api.github.com/licenses/lgpl-3.0",
  },
  {
    key: "MPL",
    url: "https://api.github.com/licenses/mpl-2.0",
  },
  {
    key: "AGPL",
    url: "https://api.github.com/licenses/agpl-3.0",
  },
  {
    key: "Apache",
    url: "https://api.github.com/licenses/apache-2.0",
  },
  {
    key: "GPL",
    url: "https://api.github.com/licenses/gpl-3.0",
  },
];

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![https://img.shields.io/badge/license-${license}-blue.svg](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const licenseObj = licenses.find(
      (licenseObj) => licenseObj.key === license
    );
    return `[${license}](${licenseObj.url})`;
  } else {
    return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Greetings from generateMarkdown.js!");
  return `# ${data.title}

## Description
${data.description}
## Badge
${renderLicenseBadge(data.license)}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Badges](#badges)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseLink(data.license)}
## Contributing
${data.guidelines}
## Tests
${data.test}
## Questions
Github Username: ${data.username}  
Github Profile: [Github Profile](https://github.com/${data.username}/)  
Any additional questions, please reach out to me by email:  
Email: [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

// https://shields.io/category/license
