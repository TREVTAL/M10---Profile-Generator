import Employee from './employee.js';


export default class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;

    }
    
    getGithub() {
        console.log(this.github);
    }
}