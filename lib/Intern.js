const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    // returns intern properties
    getSchool() {
        return this.school;
    };
}

module.exports = Intern;