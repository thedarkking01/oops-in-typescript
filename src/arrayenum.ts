//Array Exercises

// Exercise 1
// Create an array of numbers and print:
// total sum
// largest number

const numbers:number[]=[1,2,3,4,5];

// total sum
const totalSum=numbers.reduce((acc,cur)=>acc+cur,0);
console.log("Total Sum:",totalSum);

// largest number
const largestNumber=numbers.reduce((acc,cur)=>Math.max(acc,cur),0);
console.log("Largest Number:",largestNumber);

// Exercise 2
// Create an array that stores both strings and numbers.
const data:(string|number)[]=["rohit",25,"shivam",30];
console.log("Data:",data);

// Tuple Exercises

// Exercise 1
// Create a tuple for a student:

const student:[string,number,string]=["rohit",25,"developer"];
console.log("Student:",student);

// Exercise 2
// Create a tuple: id, username, isLoggedIn

const user:[number,string,boolean]=[1,"rohit",true];
console.log("User:",user);

// Enum Exercises
// Exercise 1
// Create an enum for traffic lights: Red, Yellow, Green

enum TrafficLight {
    Red,
    Yellow,
    Green
}
console.log("Traffic Light:",TrafficLight.Green);

// Exercise 2
// Create a string enum for user roles: Admin, User, Guest
enum UserRole {
    Admin="Admin",
    User="User",
    Guest="Guest"
}
if (UserRole.Admin === "Admin") {
    console.log("User Role:",UserRole.Admin);
}
console.log('Limited Access');
