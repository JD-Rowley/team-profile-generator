const Employee = require('./Employee');

function Manager(name, id, email, officeNumber) {
    this.name = name;

    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

// inherit methods from employee
Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;