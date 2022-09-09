const Engineer = require('../lib/engineer');

describe('Engineer',() => {
    describe('Initialization', () => {
        it("can set an Github account via Engineer constructor", () => {
            const gitHub = "AAA";
            const eng = new Engineer("Jorge", "1", "some@email.com", gitHub);
            expect(eng.gitHub).toEqual(gitHub);
        })

        // method checks
        it("getRole() retuns Employee's role", () => {
            const role = "Engineer";
            const eng = new Engineer("Jorge", "1", "some@email.com", "AAA");
            const engRole = eng.getRole();
            expect(engRole).toEqual(role);
        })

        it("getGitHub() retuns Employee's Github", () => {
            const gitHub = "AAA";
            const eng = new Engineer("Jorge", "1", "some@email.com", gitHub);
            const engGitHub = eng.getGitHub();
            expect(engGitHub).toEqual(gitHub);
        })

    });
})