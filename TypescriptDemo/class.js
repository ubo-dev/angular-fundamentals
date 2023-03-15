"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    static getEmployeeCount() {
        return 100;
    }
    getNameWithAdress() {
        return `${this.name} lives at ${this.address}`;
    }
}
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, "John", { street: "123 Main St", city: "New York", state: "NY", pin: 12345 });
let mary = new Manager(2, "Mary", { street: "543 Smith St", city: "Boston", state: "MA", pin: 54321 });
mary.getNameWithAdress();
console.log(john);
console.log(john.getNameWithAdress());
console.log(mary);
console.log(mary.getNameWithAdress());
console.log(Employee.getEmployeeCount());
console.log(john.empId);
