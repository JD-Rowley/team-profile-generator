const Employee = require('./Employee');

function Engineer(name, id, email, github) {
    this.name = name;

    this.id = id;
    this.email = email;
    this.github = github;
}

// inherit employee methods
Engineer.prototype = Object.create(Employee.prototype);

// returns engineer properties
Engineer.prototype.getGithub = function() {
    return this.github;
};

module.exports = Engineer;