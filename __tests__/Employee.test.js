const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('dave@fakemail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Name: ' + employee.name);
});

test("gets employee's id", () => {
    const employee = new Employee('Dave');

    expect(employee.getId()).toBe('ID: ' + employee.id)
});

test("gets employee's email", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toBe('Email: ' + employee.email);
});

test("gets employee's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('');
});