const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    
    // returns engineer properties
    getGithub() {
        return this.github;
    };
}

module.exports = Engineer;