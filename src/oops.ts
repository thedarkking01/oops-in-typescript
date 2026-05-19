// Excersise - 1 -> Bank Account system in oops
//create a class for bank account
class bankAccount {
    ownerName:string;
    private balance:number;

    constructor(ownerName:string,balance:number) {
        this.ownerName=ownerName;
        this.balance=balance;
    }

    deposit(amount:number) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }

    withdraw(amount:number){
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance is ${this.balance}`);
        }
    }

    checkBalance():void {
        console.log(`Current balance is ${this.balance}`);
    }
}

const user1=new bankAccount("rohit",1000);
user1.deposit(500);
user1.withdraw(500);
user1.checkBalance();