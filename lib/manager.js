// const { default: inquirer } = require("inquirer");
import inquirer from 'inquirer';

// const employee = require('./employee');

import Employee from './employee.js';


export default class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        // this.role = 'Manager';

        // super(role = "Manager");
        this.officeNumber = officeNumber;

    }

}

// module.exports = Manager;