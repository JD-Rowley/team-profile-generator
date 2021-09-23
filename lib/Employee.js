function Employee(name = '') {
    this.name = name;

    this.id = '1';
    this.email = name.toLowerCase() + '@fakemail.com';
}

// returns employee properties
Employee.prototype.getName = function() {
    return 'Name: ' + this.name;
};

Employee.prototype.getId = function() {
    return 'ID: ' + this.id;
};

Employee.prototype.getEmail = function() {
    return 'email: ' + this.email;
};

Employee.prototype.getRole = function() {
    return 'Employee';
};

module.exports = Employee;