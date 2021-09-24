function Employee(name, id, email) {
    this.name = name;

    this.id = id;
    this.email = email;
}

// returns employee properties
Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

module.exports = Employee;