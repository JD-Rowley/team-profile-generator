function Manager(name = '') {
    this.name = name;

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
    this.officeNumber = '1';
}

// returns manager properties
Manager.prototype.getName = function() {
    return 'Name: ' + this.name;
};

Manager.prototype.getId = function() {
    return 'ID: ' + this.id;
};

Manager.prototype.getEmail = function() {
    return 'Email: ' + this.email;
};

Manager.prototype.getRole = function() {
    return 'Manager';
};

module.exports = Manager;