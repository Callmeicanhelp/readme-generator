// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectname',
        message: 'what is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your project about?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project dependency?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run the program??',
    },
    {
        type: 'list',
        choices: ['Apache', 'MIT', 'other'],
        name: 'license',
        message: "Please choose the license name you're using",
    },
    {
        type: 'input',
        name: 'distribution',
        message: 'How do I distribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do I test?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Contact Info',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
       err ? console.log(err) : console.log('Success!')
     );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        writeToFile('READMESample.md', data)
    });
}

// Function call to initialize app
init();
