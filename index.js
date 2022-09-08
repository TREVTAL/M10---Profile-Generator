import inquirer from 'inquirer';
import Manager from './lib/manager.js';
import Engineer from './lib/engineer.js';
import Intern from './lib/intern.js';
// import htmlCreator from './lib/htmlCreator.js';
import fs from 'fs';


const arr = [];
let teamName = "";

const selectorList = [
    {
        type: 'list',
        message:     "Please select the type of employee you wish to add",
        choices:    ["Manager",
                    "Engineer" , 
                    "Intern" , 
                    "I've finished, please creat org chart"],
        name: 'selection',
      },
];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: `What's the employee's name?`,
    }, 
    {
        type: 'input',
        name: 'email',
        message: `What's the employee's email?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `What's the employee's id?`,
    }, 
];

const questionsManager = [
    questions[0],
    questions[1],
    questions[2],
    {
        type: 'input',
        name: 'officeNumber',
        message: `What's the employee's office number?`,
    }
];

const questionsEngineer = [
    questions[0],
    questions[1],
    questions[2],
    {
        type: 'input',
        name: 'gitHubUser',
        message: `What's the employee's Github user?`,
    }
];

const questionsIntern = [
    questions[0],
    questions[1],
    questions[2],
    {
        type: 'input',
        name: 'school',
        message: `What's the employee's school name?`,
    }
];

const generateHtml = (teamName, cards) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title> ${teamName}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/0c591549b7.js" crossorigin="anonymous"></script>
</head>

<body>
    <header class="container-fluid bg-danger text-white mb-5 p-3">
        <div class="text-center">
          <h1>${teamName}</h1>
        </div>
    </header>

    <main class="d-flex justify-content-center flex-wrap">


    ${cards}
    </main>
</body>`;


const htmlCreator = arr => {
    const result= [];
    for (let i=0; i < arr.length ; i++) {
        let icon = "";
        let optional = "";

        if(arr[i].role === "Manager") {
            icon='fa-mug-hot';
            optional=`<li class="list-group-item">Office Number: ${arr[i].officeNumber}</li>`;
        } else if(arr[i].role==="Engineer") {
            icon='fa-laptop-code';
            optional=`<li class="list-group-item">GitHub : <a href="https://github.com/${arr[i].github}/">${arr[i].github} </a> </li>`;
        } else {
            icon='fa-graduation-cap';
            optional=`<li class="list-group-item">School: ${arr[i].school}</li>`;
        };
        
        result.push(
        `<div class="card shadow m-3 p-0" style="width: 21rem;">
            <div class="card-title bg-primary text-white ps-3 pb-2 rounded-top">
                <h3> ${arr[i].name} </h3>
                <h5> <i class="fa-solid ${icon}"></i> ${arr[i].role}</h5>
            </div>
            <div class="card-body">
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${arr[i].id}</li>
                        <li class="list-group-item"> Email: <a href="mailto:${arr[i].email}" target="_blank">${arr[i].email}</a></li>
                        ${optional}
                    </ul>
                </div>
            </div>
        </div>  



        `)};
    return result;
    }



console.log('Thankyou for choosing Team Profile Generator\n\n');
inquirer.prompt(
    {
        type: 'input',
        name: 'teamName',
        message: "What is the team's name?",
    }
).then((answer) => {
    teamName = answer.teamName;
    console.log(`Thankyou, we will now start to setup ${answer.teamName}'s member information 😀 \n\n`)
    selector(selectorList);
}); 

const selector = selectorList => { inquirer.prompt(selectorList).then((answer) => {
    switch(answer.selection){
        case "Manager":
            inquirer.prompt(questionsManager).then((answers) => {
                arr.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved! ${answers.officeNumber}\n\n`);
                selector(selectorList);
            })
            break;
        case "Engineer":
            inquirer.prompt(questionsEngineer).then((answers) => {
                arr.push(new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved!${answers.gitHubUser}\n\n`);
                selector(selectorList);
            })
            break;
        case "Intern":
            inquirer.prompt(questionsIntern).then((answers) => {
                arr.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved!\n\n`);
                selector(selectorList);
            })
            break;
        case "I've finished, please creat org chart":
            console.log(`\n\n`);
            // console.log(arr[0].name);
            // console.log(arr[0].email);
            // console.log(arr[0].office);
            // console.log(arr[1].gitHub);
            // console.log(arr[2].school);
            // console.log(arr)
            const cards = htmlCreator(arr);
            const htmlFinal = generateHtml(teamName, cards);
            fs.writeFile('index.html', htmlFinal, (err) =>
            err ? console.log(err) : console.log('Success, Team Profile Generated!'))
            console.log(`\n\n`);
            break;
    };
}) };

// selector(selectorList);
