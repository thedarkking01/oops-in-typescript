// Excersise - 1
// Create type
type user={
    name:string;
    age:number;
    isAdmin:boolean;
}
//create object
const user:user={
    name:"rohit",
    age:25,
    isAdmin:false
}

//Exercise 2 — Optional Property
type car={
    brand:string;
    model:string;
    price?:number;
}

const car1:car={
    brand:"Toyota",
    model:"Camry"
}
const car2:car={
    brand:"Honda",
    model:"Civic",
    price:20000
}

//Exercise 3 — Nested Object
type student={
    name:string;
    age:number;
    address:{
        city:string;
        country:string;
    }
}
const student:student={
    name:"rohit",
    age:25,
    address:{
        city:"New York",
        country:"USA"
    }
}

//Exercise 4 — Array of Objects

type Product={
    id:number;
    name:string;
    price:number;
}
const products:Product[]=[
    {
        id:1,
        name:"Product 1",
        price:100
    },
    {
        id:2,
        name:"Product 2",
        price:200
    },
    {
        id:3,
        name:"Product 3",
        price:300
    }
]

//Exercise 5 — Function with Object Parameter
type user2={
    name:string;
    age:number;
}
function printUserInfo(user:user2) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

//Exercise 6 — Readonly Object
type account={
    readonly id:number;
    username:string;
}

const account:account={
    id:1,
    username:"rohit"
}

//Exercise 7 — Union Inside Object

type Status = "online" | "offline";

type Person = {
    name: string;
    status: Status;
};

const p1: Person = {
    name: "Rohit",
    status: "online"
};

//Exercise 8 — Object with Method

type Calculator = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
console.log(calculator.add(8,9));

//Exercise 9 — Interface + Class
interface Employee {
    id: number;
    name: string;
    salary: number;
}

class Developer implements Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

const emp = new Developer(1, "Shivam", 50000);

//Exercise 10 — Advanced Challenge (Order)
type status = "pending" | "shipped" | "delivered";

type Customer = {
    id: number;
    name: string;
};

type product = {
    id: number;
    name: string;
    price: number;
};

type Order = {
    id: number;
    customer: Customer;
    products: product[];
    status: status;
};

const order: Order = {
    id: 101,
    customer: {
        id: 1,
        name: "Rohit"
    },
    products: [
        { id: 1, name: "Mouse", price: 500 },
        { id: 2, name: "Keyboard", price: 1200 }
    ],
    status: "pending",
};