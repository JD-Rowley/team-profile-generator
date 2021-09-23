const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Luke');

    expect(intern.name).toBe('Luke');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('luke@fakemail.com');
    expect(intern.school).toBe('University of Utah')
});

test("gets intern's name", () => {
    const intern = new Intern('Luke');

    expect(intern.getName()).toBe('Name: ' + intern.name);
});

test("gets intern's id", () => {
    const intern = new Intern('Luke');

    expect(intern.getId()).toBe('ID: ' + intern.id)
});

test("gets intern's email", () => {
    const intern = new Intern('Luke');

    expect(intern.getEmail()).toBe('Email: ' + intern.email);
});

test("gets intern's school", () => {
    const intern = new Intern('Luke');

    expect(intern.getSchool()).toBe('School: ' + intern.school);
})

test("gets intern's role", () => {
    const intern = new Intern('Luke');

    expect(intern.getRole()).toBe('Intern');
});