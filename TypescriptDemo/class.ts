interface Address {
    street: string;
    city: string;
    state: string;
    pin: number;
}

class Employee {
    id: number;
    protected name: string;
    address: Address;
    
    constructor(id: number, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    get empId(): number {
        return this.id;
    }

    set empId(id: number) {
        this.id = id;
    }

    static getEmployeeCount(): number {
        return 100;
    }

    getNameWithAdress(): string {
        return `${this.name} lives at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
      }
}

let john = new Employee(1,"John",{street: "123 Main St", city: "New York", state: "NY", pin: 12345});
let mary = new Manager(2,"Mary",{street: "543 Smith St", city: "Boston", state: "MA", pin: 54321});

mary.getNameWithAdress();

console.log(john);
console.log(john.getNameWithAdress())
console.log(mary);
console.log(mary.getNameWithAdress())

console.log(Employee.getEmployeeCount());

console.log(john.empId);


