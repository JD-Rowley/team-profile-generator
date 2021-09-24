const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Luke', 2, 'luke@gmail.com', 'UofU');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});