const Employee = require('../lib/employee');

describe('Employee',() => {
    describe('Initialization', () => {
        it("can set a name via Employee constructor", () => {
            const name = "Jorge";
            const emp = new Employee(name, "1", "some@email.com", "Employee");
            expect(emp.name).toEqual(name);
        })

        it("can set an id via Employee constructor" , () =>{
            const is = "001";
            const emp = new Employee("Jorge", id, "some@email.com", "Employee");
            expect(emp.id).toEqual(id);
        })

        it("can set an email via Employee constructor" , () =>{
            const email = "some@mail.com";
            const emp = new Employee("Jorge", "1", email, "Employee");
            expect(emp.email).toEqual(email);
        })

        // method checks start
        it("getName() retuns Employee's name", () => {
            const name = "Jorge";
            const emp = new Employee(name, "1", "some@email.com", "Employee");
            const empName = emp.getName();
            expect(empName).toEqual(name);
        })

        it("getId() retuns Employee's id" , () =>{
            const is = "001";
            const emp = new Employee("Jorge", id, "some@email.com", "Employee");
            const empId = emp.getId();
            expect(empId).toEqual(id);
        })

        it("getEmail() retuns Employee's email" , () =>{
            const email = "some@mail.com";
            const emp = new Employee("Jorge", "1", email, "Employee");
            const empEmail = emp.getEmail();
            expect(empEmail).toEqual(email);
        })


        it("getRole() retuns Employee's role" , () =>{
            const role = "Employee";
            const emp = new Employee("Jorge", "1", "some@email.com", role);
            const empRole = emp.getRole();
            expect(empRole).toEqual(role);
        })


    });
})