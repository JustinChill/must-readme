// Include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions to ask
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Any special installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for how to use your app:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please specify any contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please define test instructions or special parameters:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Lastly, please enter your email address:',
  },
];

// Write README file with filesystem (fs)
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md has been generated!')
  );
}

// Initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

init();