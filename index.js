// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'; //access to js file
import fs from 'fs';

// TODO: Create an array of questions for user input
let q1 = 'What is the title of the Project?';
let q2 = 'What is the description of the Project?';
let q3 = 'What is the license of the Project?';
let q6 = 'What do you need to install?';
let q8 = 'What usage information?';
let q9 = 'What contribution guidelines?';
let q7 = 'What tests do you have?';
let q4 = 'What is your github username?';
let q5 = 'What is your email?';

const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

function prompt() {
	return inquirer.prompt([
		{
			type: 'input',
			message: q1,
			name: 'title',
			validate: (titleInput) => {
				return titleInput ? true : console.log('Enter a title');
			},
		},
		{
			type: 'input',
			message: q2,
			name: 'description',
			validate: (descriptionInput) => {
				return descriptionInput
					? true
					: console.log('Enter a description');
			},
		},
		{
			type: 'input',
			message: q6,
			name: 'installation',
			validate: (installInput) => {
				return installInput
					? true
					: console.log('Enter your install commands');
			},
		},
		{
			type: 'list',
			message: q3,
			choices: ['Apache License 2.0', 'MIT', 'ISC License', 'GNU GPLv3'], // list of license options --> https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository#choosing-the-right-license
			name: 'license',
		},
		{
			type: 'input',
			message: q8,
			name: 'usage',
			validate: (usageInput) => {
				return usageInput ? true : console.log('Enter your usage');
			},
		},
		{
			type: 'input',
			message: q9,
			name: 'contribution',
			validate: (contribution) => {
				return contribution
					? true
					: console.log('Enter your contributions');
			},
		},
		{
			type: 'input',
			message: q7,
			name: 'tests',
			validate: (testInput) => {
				return testInput
					? true
					: console.log('Enter your test commands');
			},
		},
		{
			type: 'input',
			message: q4,
			name: 'username',
			validate: (githubInput) => {
				return githubInput
					? true
					: console.log('Enter your github username');
			},
		},
		{
			type: 'input',
			message: q5,
			name: 'email',
			validate: (emailInput) => {
				return emailInput ? true : console.log('Enter your email');
			},
		},
	]);
}
// TODO: Create a function to write README file
function writeToFile(newReadMe) {
	fs.writeFile('./assets/README.md', newReadMe, (err) => {
		if (err) {
			console.log(err);
			return;
		} else {
			console.log('Yay! You have made a README.md!');
		}
	});
}

// TODO: Create a function to initialize app
function init() {
	console.log(questions);
	prompt()
		.then((data) => {
			console.log('Answers:', data);
			return generateMarkdown(data);
		})
		.then((newReadMe) => {
			return writeToFile(newReadMe);
		})
		.catch((err) => {
			console.log(err);
		});
}

// // // Function call to initialize app
init();
