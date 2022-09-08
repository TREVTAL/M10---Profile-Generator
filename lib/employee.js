import inquirer from 'inquirer';
// const inquirer = require('inquirer');
// let inquirer = import('inquirer');

export default class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id=id;
        this.email=email;
        this.role="Employee";
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
        console.log(this.role);
    }
}

// module.exports = Employee;
