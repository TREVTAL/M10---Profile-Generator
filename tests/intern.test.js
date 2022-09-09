const Intern = require('../lib/intern');

describe('Intern',() => {
    describe('Initialization', () => {
        it("can set School Name via EngInternineer constructor", () => {
            const schoolName = "ITESM";
            const int = new Engineer("Jorge", "1", "some@email.com", schoolName);
            expect(int.schoolName).toEqual(schoolName);
        })

        // method checks
        it("getRole() retuns Employee's role", () => {
            const role = "Intern";
            const int = new Engineer("Jorge", "1", "some@email.com", "ITESM");
            const intRole = int.getRole();
            expect(intRole).toEqual(role);
        })

        it("getSchool() retuns Employee's School", () => {
            const schoolName = "ITESM";
            const int = new Engineer("Jorge", "1", "some@email.com", gitHub);
            const intSchool = int.getGitHub();
            expect(intSchool).toEqual(gitHub);
        })

    });
})