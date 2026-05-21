// Single Responsibility Principle (SRP) states:

// “A class should have only one reason to change.”

// This means:

// A class should do only one job
// It should have only one responsibility

// If a class handles multiple tasks, changes in one task may affect the others, making the code harder to maintain.

class User {
  constructor(
    public name: string,
    public email: string
  ) {}
}

class UserValidator {

  validate(user: User): boolean {

    if (!user.email.includes("@")) {
      return false;
    }

    return true;
  }
}

class UserRepository {

  save(user: User): void {
    console.log("User saved to database");
  }
}
class EmailService {

  sendWelcomeEmail(user: User): void {
    console.log(`Welcome email sent to ${user.email}`);
  }
}

class UserService {

  constructor(
    private validator: UserValidator,
    private repository: UserRepository,
    private emailService: EmailService
  ) {}

  createUser(name: string, email: string): void {

    // Create user object
    const user = new User(name, email);

    // Validate user
    const isValid = this.validator.validate(user);

    if (!isValid) {
      throw new Error("Invalid user data");
    }

    // Save user
    this.repository.save(user);

    // Send email
    this.emailService.sendWelcomeEmail(user);

    console.log("User registration completed");
  }
}


// ocp - Open/Closed Principle (OCP) states:

// “Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.”

// create abstract class 
interface PaymentMethod {
  pay(amount: number): void;
}
//Create implementations
class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Card`);
  }
}

class PaypalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Paypal`);
  }
}

//Main service
class PaymentService {
  process(paymentMethod: PaymentMethod, amount: number) {
    paymentMethod.pay(amount);
  }
}

//Usage
const service = new PaymentService();

service.process(new CardPayment(), 1000);

service.process(new PaypalPayment(), 2000);