/*
Fullname and Email
source: edabit - very easy
https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

Create the instance properties fullname and email in the Employee class. 
Given a person's first and last names:

Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, 
and follow it with @company.com at the end. Make sure everything is in lowercase.

** Examples

emp1 = Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

emp3 = Employee("Antony", "Walker")
emp3.firstname ➞ "Antony"

class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
	}
}

*/

// My Solution
class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }

  get email() {
    return `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
  }
}

let emp1 = new Employee('John', 'Smith');
console.log(emp1.email);
console.log(emp1.fullname);
