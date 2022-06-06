// Required packages to install
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Question array
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
        message: 'How do you run the program?',
    },
    {
        type: 'list',
        choices: ['Apache', 'MIT', 'IBM', 'Perl', 'other'],
        name: 'license',
        message: "Please choose the license name you're using",
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do I contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do I test?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
       err ? console.log(err) : console.log('Success!')
     );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        writeToFile('Sample-README.md', data)
    });
}

// Function call to initialize app
init();
