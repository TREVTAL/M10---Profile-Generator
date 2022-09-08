import Employee from './employee.js';

export default class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school;

    }
    
    getSchool() {
        console.log(this.school);
    }
}