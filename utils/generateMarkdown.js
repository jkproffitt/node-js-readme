// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	license !== ''
		? `[![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)]`
		: '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	!license
		? ''
		: license === 'MIT'
		? 'https://opensource.org/licenses/MIT'
		: license === 'GNU GPLv3'
		? 'https://www.gnu.org/licenses/gpl-3.0'
		: license === 'Apache License 2.0'
		? 'https://opensource.org/licenses/Apache-2.0'
		: license === 'ISC License'
		? 'https://opensource.org/licenses/ISC'
		: '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	license !== '' ? `Licensed under ${license}` : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
	const { license, ...data } = userInput;
	return `# ${data.title} ${renderLicenseBadge(license)}  

  ## Table of Contents
  * [Installation](#installation)
  * [License](#license)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##Description
  ${data.description}

  ##Installation
  ${data.installation}
  
  ##License
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}

  ##Usage
  ${data.usage}

  ##Contributing
  ${data.contribution}

  ##Tests
  ${data.tests}

  ##Questions
  email: ${data.email} or repo: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
