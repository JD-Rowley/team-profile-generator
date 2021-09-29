const { writeFile, copyFile } = require('./utils/generatePage.js');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee.js');

// arrays for employees
const managerArr = [];
const engineerArr = [];
const internArr =[];

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
            }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            managerArr.push(manager);
            nextEmployee();
        })
};

function addEngineer() {
    return inquirer
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
        .then(answers => {
            const engineers = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineerArr.push(engineers);
            nextEmployee();
        })
};

function addIntern() {
    return inquirer
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
                name: 'internSchool',
                message: "What school did this intern attend?"
            }
        ])
        .then(answers => {
            const interns = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(interns);
            nextEmployee();
        })
};

function generatePageHTML() {
    const pageHTML = generatePage({ managerArr, engineerArr, internArr });

    if (!fs.existsSync('./dist')) {
        console.log('No directory... Creating...')

        fs.mkdir('./dist', err => {
            if (err) return err;

            fs.writeFile('./dist/index.html', pageHTML, err => {
                if (err) return err;

                console.log('Page created!');
            })
        })
    } else {
        console.log('Directory detected...')

        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw err;
        
            console.log('Page created!');
        });

        return;
    }

}

function nextEmployee() {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'chooseEmployee',
                message: 'Would you like to add an engineer or an intern?',
                choices: ['Engineer', 'Intern', "I don't want to add another employee"]
            }
        )
        .then(({ chooseEmployee }) => {
            if (chooseEmployee === 'Engineer') {
                addEngineer();
            } else if (chooseEmployee === 'Intern') {
                addIntern();
            } else {
                generatePageHTML();
            }
        })
};

initializeApp()

module.exports = initializeApp;