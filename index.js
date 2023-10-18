// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js'); //access to js file
const fs = require('fs'); //for filesystem access

// TODO: Create an array of questions for user input
let q1 = 'What is the title of the Project?';
let q2 = 'What is the description of the Project?';
let q3 = 'What is the license of the Project?';
let q6 = 'What do you need to install?';
let q8 = 'What usage information?';
let q9 = 'What contribution guidlines?';
let q7 = 'What tests do you have?';
let q4 = 'What is your github username?';
let q5 = 'What is your email?';

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

inquirer
	.prompt([
		{
			type: 'input',
			message: q1,
			name: 'title',
			validate: (titleInput) => {
				titleInput ? true : console.log('Enter a title');
			},
		},
		{
			type: 'input',
			message: q2,
			name: 'description',
		},
		{
			type: 'input',
			message: q6,
			name: 'install',
			validate: (installInput) => {
				installInput
					? true
					: console.log('Enter your install commands');
			},
		},
		{
			type: 'list',
			message: q3,
			choices: ['Apache-2.0', 'MIT', 'BSD-3-Clause', 'gpl-3.0'], // list of license options --> https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository#choosing-the-right-license
			name: 'license',
		},
		{
			type: 'input',
			message: q6,
			name: 'usage',
			validate: (usageInput) => {
				usageInput ? true : console.log('Enter your usage');
			},
		},
		{
			type: 'input',
			message: q6,
			name: 'contribution',
			validate: (contribution) => {
				contribution ? true : console.log('Enter your contributions');
			},
		},
		{
			type: 'input',
			message: q6,
			name: 'test',
			validate: (testInput) => {
				testInput ? true : console.log('Enter your test commands');
			},
		},
		{
			type: 'input',
			message: q4,
			name: 'username',
			validate: (githubInput) => {
				githubInput ? true : console.log('Enter your github username');
			},
		},
		{
			type: 'input',
			message: q5,
			name: 'email',
			validate: (emailInput) => {
				emailInput ? true : console.log('Enter your email');
			},
		},
	])
	.then((response) =>
		response.confirm === response.password
			? console.log('Success!')
			: console.log('You forgot your password already?!')
	);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeToFile('./assets/README.md', fileContent, (err) => {
		if (err) {
			reject(err);
			return;
		}
		resolve({
			ok: true,
			message: 'Yay! You have made a README.md!',
		});
	});
}

// TODO: Create a function to initialize app
function init() {
	console.log(questions);
	questions()
		.then((data) => {
			return generateMarkdown(data);
		})
		.then((newReadMe) => {
			return writeToFile(newReadMe);
		})
		.then((writeInput) => {
			console.log(writeInput.message);
		})
		.catch((err) => {
			console.log(err);
		});
}

// Function call to initialize app
init();
