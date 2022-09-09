// import neccesary packages and modules
import inquirer from 'inquirer';
import Manager from './lib/manager.js';
import Engineer from './lib/engineer.js';
import Intern from './lib/intern.js';
import fs from 'fs';

//create variables , arr will be where team is saved and teamName to be used on title and Header of final product
const arr = [];
let teamName = "";

// list of questions for prompts
// selectorList is used to know type of Employee to be added
const selectorList = [
    {
        type: 'list',
        message:     "Please select the type of employee you wish to add",
        choices:    ["Manager",
                    "Engineer" , 
                    "Intern" , 
                    "I've finished, please create org chart"],
        name: 'selection',
      },
];

// Basic questions that will be asked for every employee
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

// 3 personalized questions that call the 3 standard questions followed by the employee type specific field
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


// HTML generator that calls teamName and cards data (you can find it bellow)
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


// this is where the cards are created
const htmlCreator = arr => {
    // different cards are saved as a string in an array called result
    const result= [];
    // loop through each of the employees saved in the arr array
    for (let i=0; i < arr.length ; i++) {
       // create temporary icon and customized field specific to the employee type
        let icon = "";
        let optional = "";

        //check for different types of employees and set the icon type and optional information field
        if(arr[i].role === "Manager") {
            icon='fa-mug-hot';
            optional=`<li class="list-group-item">Office Number: ${arr[i].officeNumber}</li>`;
        } else if(arr[i].role==="Engineer") {
            icon='fa-laptop-code';
            optional=`<li class="list-group-item">GitHub : <a href="https://github.com/${arr[i].github}/" target="_blank">${arr[i].github} </a> </li>`;
        } else {
            icon='fa-graduation-cap';
            optional=`<li class="list-group-item">School: ${arr[i].school}</li>`;
        };
        
        // once the customized data fields are set, paste them in the cards HTML and add them to the result array
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


// user interface begins:
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
    //calls the selector list to initialize the data input loop
    selector(selectorList);
}); 

// selector is the core of user interfase. 
// loop between the list and the set of employee type-specific questions. 
// first, the selector list questions are prompted:
const selector = selectorList => { inquirer.prompt(selectorList).then((answer) => {
    // we check on a switch to execute next code according to user selection:
    switch(answer.selection){
        case "Manager":
            // in case Manager was selected, then manager questions are prompted
            inquirer.prompt(questionsManager).then((answers) => {
                // create a new object from Manager class, and set arguments according to user data. objet is added to arr array
                arr.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved!\n\n`);
                // selector is called again to return to employee type options
                selector(selectorList);
            })
            break;
        case "Engineer":
            // same as Manager, but prompting Engineer questions and class.
            inquirer.prompt(questionsEngineer).then((answers) => {
                arr.push(new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved!\n\n`);
                selector(selectorList);
            })
            break;
        case "Intern":
            // same as Manager, but prompting Intern questions and class.
            inquirer.prompt(questionsIntern).then((answers) => {
                arr.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                console.log(`\n\nThankyou, ${answers.name}'s information has been saved!\n\n`);
                selector(selectorList);
            })
            break;
        case "I've finished, please create org chart":
            // Finished option 
            console.log(`\n\n`);
            // create custom cards with information in arr
            const cards = htmlCreator(arr);
            // using teamName and cards, generate final HTML string
            const htmlFinal = generateHtml(teamName, cards);
            // using string, create the index.html file
            fs.writeFile('./dist/index.html', htmlFinal, (err) =>
            err ? console.log(err) : console.log('Success, Team Profile Generated!'))
            console.log(`\n\n`);
            // selector not called again because we're done and need to exit loop
            break;
    };
}) };