const Employee = require('./Employee');

function Engineer(name = '') {
    this.name = name;
    this.role = 'Engineer';

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.github = 'https://github.com/' + name.toLowerCase();
}

// inherit employee methods
Engineer.prototype = Object.create(Employee.prototype);

// returns engineer properties
Engineer.prototype.getGithub = function() {
    return 'GitHub: ' + this.github;
};

module.exports = Engineer;