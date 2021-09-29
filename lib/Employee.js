class Employee {
    constructor(name, id, email) {
        this.name = name;

        this.id = id;
        this.email = email;
    }
    
    // returns employee properties
    getName() {
        return this.name;
    };
    
    getID() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };
}

module.exports = Employee;