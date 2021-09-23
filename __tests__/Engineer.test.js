const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Phil');

    expect(engineer.name).toBe('Phil');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe( engineer.name.toLowerCase() + '@fakemail.com');
    expect(engineer.github).toBe('https://github.com/' + engineer.name.toLowerCase());
});

test("get engineer's github", () => {
    const engineer = new Engineer('Phil');

    expect(engineer.getGithub()).toBe('GitHub: ' + engineer.github)
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Phil');

    expect(engineer.getName()).toBe('Name: ' + engineer.name);
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Phil');

    expect(engineer.getId()).toBe('ID: ' + engineer.id)
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Phil');

    expect(engineer.getEmail()).toBe('Email: ' + engineer.email);
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Phil');

    expect(engineer.getRole()).toBe('Engineer');
});