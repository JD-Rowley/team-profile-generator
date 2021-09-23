function Engineer(name = '') {
    this.name = name;

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.github = 'https://github.com/' + name.toLowerCase();
}

// returns engineer properties
Engineer.prototype.getName = function() {
    return 'Name: ' + this.name;
};

Engineer.prototype.getId = function() {
    return 'ID: ' + this.id;
};

Engineer.prototype.getEmail = function() {
    return 'email: ' + this.email;
};

Engineer.prototype.getGithub = function() {
    return 'GitHub: ' + this.github;
};

Engineer.prototype.getRole = function() {
    return 'Engineer';
};

module.exports = Engineer;