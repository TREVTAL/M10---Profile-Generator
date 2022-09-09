const Manager = require('../lib/manager');

describe('Manager',() => {
    describe('Initialization', () => {
        it("can set an office number via Manager constructor", () => {
            const officeNumber = "10";
            const man = new Manager("Jorge", "1", "some@email.com", officeNumber);
            expect(man.officeNumber).toEqual(officeNumber);
        })

        // method checks
        it("getRole() retuns Employee's role", () => {
            const role = "Manager";
            const man = new Manager("Jorge", "1", "some@email.com", "10");
            const manRole = man.getRole();
            expect(manRole).toEqual(role);
        })

    });
})