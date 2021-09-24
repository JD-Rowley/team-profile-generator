const Employee = require('./Employee');

function Intern(name, id, email, school) {
    this.name = name;

    this.id = id;
    this.email = email;
    this.school = school;
}

// inherit employee methods
Intern.prototype = Object.create(Employee.prototype);

// returns intern properties
Intern.prototype.getSchool = function() {
    return this.school;
};

module.exports = Intern;