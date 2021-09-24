const Employee = require('./Employee');

function Engineer(name, id, github) {
    this.name = name;

    this.id = id;
    this.email = name.toLowerCase() + '@fakemail.com';
    this.github = github
}

// inherit employee methods
Engineer.prototype = Object.create(Employee.prototype);

// returns engineer properties
Engineer.prototype.getGithub = function() {
    return 'GitHub: ' + this.github;
};

module.exports = Engineer;