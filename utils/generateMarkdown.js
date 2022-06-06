
// Function that returns the license section of README
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
    case 'IBM':
      badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;
    case 'Perl':
      badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
       break;
    default:
      break;
  }
  return badge
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}
  # Description 
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Contribution
  ${data.contribution}

  # License
  ${renderLicenseSection(data.license)}

  # Test
  ${data.test}

  # GitHub
  ${data.GitHub}

  # Email
  ${data.email}
`;
}

module.exports = generateMarkdown;
