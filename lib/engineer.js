// const { default: inquirer } = require("inquirer");
import inquirer from 'inquirer';

// const employee = require('./employee');
import Employee from './employee.js';


export default class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        // const role = 'Engineer';

        // super(role);
        this.github = github;

    }
    
    getGithub() {
        console.log(this.github);
    }
}

// module.exports = Engineer;