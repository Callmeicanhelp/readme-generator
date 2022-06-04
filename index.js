// TODO: Include packages needed for this application
const inq = require('inquirer')
const fs = require('fs')

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
        type: "list",
        choice: ["apache", "mit", "other"],
        name: "license",
        message: "Please use the license name"
    },
    {
        type: 'input',
        name: 'distribute',
        message: 'How do I contribute?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How do I test?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    .then(data => {
        const filename = `${data.name
          .toLowerCase()
          .split(' ')
          .join('')}.json`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
          err ? console.log(err) : console.log('Success!')
        );
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
    //     console.log("Making ReadMe");
    //     fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    // })
    // .catch((err) => {
    //     console.log(err);
    })

    
}

// Function call to initialize app
init();
