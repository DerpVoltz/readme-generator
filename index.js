// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How do you contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write some tests if you have any.'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Give the link to your github profile (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please give the link to your GitHub profile.')
            }
        }
    },
    {
        type: 'type',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return  true;
            } else {
                console.log('Please Enter email.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, generateMarkdown(data))
    .then(err => {
        if (err) {
            console.log(err);
        }
        return false;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
