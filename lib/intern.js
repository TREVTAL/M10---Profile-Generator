// similar to Engineer, please view comments there, just changing Github to school
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