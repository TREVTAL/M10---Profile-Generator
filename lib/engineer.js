// call Employee
import Employee from './employee.js';

//Create Engineer by extending Employee
export default class Engineer extends Employee{
    //Create own constructor for Engineer, inluding extra parameter GitHub
    constructor(name, id, email, github) {
        // call parent and set role as Engineer
        super(name, id, email, "Engineer");
        this.github = github;

    }
    
    getGithub() {
        console.log(this.github);
        return this.github;
    }

    getRole() {
        console.log(this.role);
        return this.role;
    }

}