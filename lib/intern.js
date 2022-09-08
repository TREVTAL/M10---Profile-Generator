// const { default: inquirer } = require("inquirer");
import inquirer from 'inquirer';

// const employee = require('./employee');

import Employee from './employee.js';

export default class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        // const role = 'Intern';

        // super(role);
        this.school = school;

    }
    
    getSchool() {
        console.log(this.school);
    }
}

// module.exports = Intern;