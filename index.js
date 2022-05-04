const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const html = require('./genHTML.js');
const distribution = path.resolve(__dirname, 'dist');
const outIndex = path.join(distribution, 'index.html');
const team = [];


function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: "What is your manager's name?",
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: "What is your manager's ID?",
        },
        {
            type: 'input',
            name: 'Email',
            message: "What is your manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
        },
    ]).then(response => {
        const manager = new Manager(response.ManagerName, response.ManagerID, response.Email, response.officeNumber);
        team.push(manager);
    //add team member?
    })
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'EngineerName',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'EngineerID',
            message: "What is your engineer's ID?",
        },
        {
            type: 'input',
            name: 'Email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your github username?",
        },
    ]).then(response => {
        const engineer = new Engineer(response.EngineerName, response.EngineerID, response.Email, response.github);
        team.push(engineer);
    //add team member?
    })
}

function newTeamMember() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'newTeamMember',
            message: 'What member would you like to add next?',
            choices: ['Manager', 'Engineer', 'Intern', 'No more team members']
        }
    ]).then (response => {
        if (response.newTeamMember === 'Manager') {
            promptUser ();
        } else if (response.newTeamMember === 'Engineer') {
            promptEngineer ();
        } else if (response.newTeamMember === "Intern") {
            promptIntern ();
        } else if (response.newTeamMember === "No more team members") {
            console.log('Your team is complete!')
        generateTeam ();
        }
    })
}