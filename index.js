// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email? ',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your project name? ',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Write a short description of your project:',
                name: 'description',
            },
            {
                type: 'checkbox',
                message: 'What kind of license should your project have?',
                name: 'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            {
                type: 'input',
                message: 'What command should be run to install the project?',
                name: 'install',
            },
            {
                type: 'input',
                message: 'What command should be run to run tests?',
                name: 'command',
            },
            {
                type: 'input',
                message: 'What does the user need to know about using the repo?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What does the user need to know about contributing to the repo?',
                name: 'contribute',
            }
        ])
        .then (({
            title,
            github,
            email,
            description,
            license,
            install,
            command,
            usage,
            contribute
        })=>{
        const markdown = `
# ${title}

`+ licenseBadge +`


## Description
${description}

## Table of Contents
*[Installation](#installation)  
*[Usage](#usage)  
*[License](#license)  
*[Contributing](#contributing)  
*[Tests](#tests)  
*[Questions](#questions)  
## Installation
To install necessary dependencies, run the following command:

${install}

## Usage
${usage}  

## License
This product is licensed under the ${license} license.  

## Contribution
${contribute}  

## Tests
To run the tests, run the following command:

${command}

### Questions
If you have any questions about the repo, open an issue or contact me at ${email}.

GitHub: ${github}`;
writeToFile(title,markdown);
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err)=>
    err ? console.log(err) : console.log('Success!')
    )
}

// testing sample badge
// const $$$ = ("sample badge");



