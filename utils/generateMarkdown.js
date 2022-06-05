
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = ''
  switch (license) {
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;

    default:
      break;
  }
  return badge
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}
  # Description 
  ${data.description}
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Distribution
  ${data.distribution}
  # License
  ${renderLicenseSection(data.license)}
  # Test
  ${data.test}
`;
}

module.exports = generateMarkdown;
