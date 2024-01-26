// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name on GitHub?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project, if any?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'screenshotLocation',
        message: 'Provide the file location of a screenshot to include.',
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license:',
    },

];

const generateREADME = ({ username, projectName, description, installation, usage, screenshotLocation, collaborators, license }) =>
`# ${projectName}

## Description
${description}

## Installation
${installation}
- [Repository on GitHub](https://github.com/${username}/${projectName})
- [Webpage on GitHub Pages](https://${username}.github.io/${projectName}) //!!!! remove if not applicable!!!

## Usage
${usage}
![screenshot](${screenshotLocation})

## Credits
${collaborators}

## License
${license}

`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created READMEnew.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile("READMEnew.md", readmeContent);
        });
};

// Function call to initialize app
init();
