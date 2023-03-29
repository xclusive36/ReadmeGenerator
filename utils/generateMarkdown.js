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

function renderLicenseBadge(license) { // function that returns the license badge
  if (license) { // if there is a license
    return `![https://img.shields.io/badge/license-${license}-blue.svg](https://img.shields.io/badge/license-${license}-blue.svg)`; // return the license badge
  } else { // if there is no license
    return ""; // return an empty string
  }
}

function renderLicenseLink(license) { // function that returns the license link
  if (license) { // if there is a license
    const licenseObj = licenses.find( // find the license object
      (licenseObj) => licenseObj.key === license // that matches the license key
    );
    return `[${license}](${licenseObj.url})`; // return the license link
  } else { // if there is no license
    return ""; // return an empty string
  }
}

function generateMarkdown(data) { // function that returns the markdown
  console.log("Greetings from generateMarkdown.js!"); // log a message to the console
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
`; // return the markdown
}

module.exports = generateMarkdown; // export the generateMarkdown function

// https://shields.io/category/license
