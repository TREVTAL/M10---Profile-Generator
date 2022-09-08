// similar to Engineer, please view comments there, just changing Github to Office Number
import Employee from './employee.js';


export default class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;

    }

}
