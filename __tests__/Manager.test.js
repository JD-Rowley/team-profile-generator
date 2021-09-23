const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Julie');

    expect(manager.name).toBe('Julie');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe(manager.name.toLowerCase() + '@fakemail.com');
    expect(manager.officeNumber).toBe('1');
});

test("gets manager's name", () => {
    const manager = new Manager('Julie');

    expect(manager.getName()).toBe('Name: ' + manager.name);
});

test("gets manager's id", () => {
    const manager = new Manager('Julie');

    expect(manager.getId()).toBe('ID: ' + manager.id)
});

test("gets manager's email", () => {
    const manager = new Manager('Julie');

    expect(manager.getEmail()).toBe('Email: ' + manager.email);
});

test("gets manager's role", () => {
    const manager = new Manager('Julie');

    expect(manager.getRole()).toBe('Manager');
});