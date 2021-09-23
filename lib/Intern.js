function Intern(name = '') {
    this.name = name;

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.school = 'University of Utah';
}

// returns intern properties
Intern.prototype.getName = function() {
    return 'Name: ' + this.name;
};

Intern.prototype.getId = function() {
    return 'ID: ' + this.id;
};

Intern.prototype.getEmail = function() {
    return 'Email: ' + this.email;
};

Intern.prototype.getSchool = function() {
    return 'School: ' + this.school;
}

Intern.prototype.getRole = function() {
    return 'Intern';
};

module.exports = Intern;