//create and export Employee class
export default class Employee {
    constructor(name, id, email, role) {
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
        // set role to Employee so getRole logs Employee as Role
        this.role='Employee';
        console.log(this.role);
    }
}