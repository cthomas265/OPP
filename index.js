const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const html = require('./source/genHTML.js');
const { start } = require('repl');
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
        newTeamMember();
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
            message: "What is your engineer's github username?",
        },
    ]).then(response => {
        const engineer = new Engineer(response.EngineerName, response.EngineerID, response.Email, response.github);
        team.push(engineer);
        newTeamMember();
    })
}

function promptIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'InternName',
            message: "What is your Intern's name?",
        },
        {
            type: 'input',
            name: 'InternID',
            message: "What is your intern's ID?",
        },
        {
            type: 'input',
            name: 'Email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your interns school?",
        },
    ]).then(response => {
        const intern = new Intern(response.InternName, response.InternID, response.Email, response.school);
        team.push(intern);
        newTeamMember();
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

function generateTeam() {
    fs.writeFileSync(outIndex, html(team), function (err){
        if (err) {
            throw err;
        }
    }); //genHTML line 75 notes linked here to html(team)
}
promptUser();