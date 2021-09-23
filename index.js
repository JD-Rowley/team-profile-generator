const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// initialize app with inquirer
function initializeApp() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the manager's ID number?"
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is the manager's e-mail address?"
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            },
            {
                type: 'list',
                name: 'chooseEmployee',
                message: 'Which employee would you like to add?',
                choices: ['Engineer', 'Intern']
            }
        ])
        .then(({ chooseEmployee }) => {
            if (chooseEmployee === 'Engineer') {
                addEngineer();
            } else {
                addIntern();
            }
        })
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is the engineer's ID number?"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is the engineer's e-mail address?"
            },
            {
                type: 'text',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?"
            }
        ])
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is the intern's ID number?"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is the intern's e-mail address?"
            },
            {
                type: 'text',
                name: 'internGithub',
                message: "What is the intern's GitHub username?"
            }
        ])
};

function nextEmployee() {
    inquirer
        .prompt(
            {
                type: 'confirm',
                name: 'employeeConfirm',
                message: 'Would you like to add another employee?',
                default: false
            }
        )
}

initializeApp();

module.exports = initializeApp;