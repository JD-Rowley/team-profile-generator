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
    // prompt using inquirer with questions about the manager
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the manager's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's id!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is the manager's e-mail address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's e-mail address!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
            }
        ])
        // when all questions answered, create and push manager object to manager array and run next employee function
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            managerArr.push(manager);
            nextEmployee();
        })
};

// function to ask questions with validation for the engineer
function addEngineer() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is the engineer's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's id!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is the engineer's e-mail address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's e-mail address!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's GitHub username!");
                        return false;
                    }
                }
            }
        ])
        // when questions are complete, create and push engineer object to engineer array and run next employee function
        .then(answers => {
            const engineers = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineerArr.push(engineers);
            nextEmployee();
        })
};

// function to ask questions with validation for the intern
function addIntern() {
    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'internName',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is the intern's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's id!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is the intern's e-mail address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's e-mail address!");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'internSchool',
                message: "What school did this intern attend?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                }
            }
        ])
        // when questions are complete, create and push intern object to intern array and run next employee function
        .then(answers => {
            const interns = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            internArr.push(interns);
            nextEmployee();
        })
};

// function to initiate inquiry about next employee
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
        // execute next function based on user's choice
        .then(({ chooseEmployee }) => {
            if (chooseEmployee === 'Engineer') {
                addEngineer();
            } else if (chooseEmployee === 'Intern') {
                addIntern();
            } else {
                // if user doesn't want to add another employee, generate the page
                generatePageHTML();
            }
        })
    };
    
// function to generate the page HTML
function generatePageHTML() {
    // variable to generate the page using data from the arrays
    const pageHTML = generatePage({ managerArr, engineerArr, internArr });

    // check if the dist folder exists in the root
    if (!fs.existsSync('./dist')) {
        // inform user the directory does not exist and is being created
        console.log('No directory... Creating...')

        // if it doesn't exist, create the directory
        fs.mkdir('./dist', err => {
            if (err) return err;

            // then write the generated page to the dist directory
            fs.writeFile('./dist/index.html', pageHTML, err => {
                if (err) return err;

                // console log success
                console.log('Page created!');
            })
        })
    } else {
        // if directory exists, inform user
        console.log('Directory detected...')

        // then write generated page to directory
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) throw err;
        
            // console log success
            console.log('Page created!');
        });

        return;
    }
};

// run the function to start the app
initializeApp()

module.exports = initializeApp;