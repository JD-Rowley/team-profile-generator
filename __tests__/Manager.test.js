const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Julie', 1, 'julie@gmail.com', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});