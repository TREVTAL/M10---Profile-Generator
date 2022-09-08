import inquirer from 'inquirer';
// const inquirer = require('inquirer');
// let inquirer = import('inquirer');

export default class Employee {
    constructor(name, id, email, role) {
        // role="employee";
        this.name = name;
        this.id=id;
        this.email=email;
        this.role=role;
    }

    getName() {
        console.log(this.name);
    }

    getid(){
        console.log(this.id);
    }

    getEmail(){
        console.log(this.email);
    }

    getRole(){
        this.role='Employee';
        console.log(this.role);
    }
}

// module.exports = Employee;
