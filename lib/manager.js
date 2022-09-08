import Employee from './employee.js';


export default class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;

    }

}
