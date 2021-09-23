const Employee = require('./Employee');

function Manager(name = '') {
    this.name = name;
    this.role = 'Manager'

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.officeNumber = '1';
}

// inherit methods from employee
Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;