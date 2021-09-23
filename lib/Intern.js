const Employee = require('./Employee');

function Intern(name = '') {
    this.name = name;
    this.role = 'Intern';

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.school = 'University of Utah';
}

// inherit employee methods
Intern.prototype = Object.create(Employee.prototype);

// returns intern properties
Intern.prototype.getSchool = function() {
    return 'School: ' + this.school;
};

module.exports = Intern;