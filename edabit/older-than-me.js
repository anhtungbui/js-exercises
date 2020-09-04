/*
Older Than Me
source: edabit - very easy
https://edabit.com/challenge/iwdZiFucR5wkQsFHu

Create a method in the Person class which returns 
how another person's age compares. Given the instances p1, p2 and p3, 
which will be initialised with the attributes name and age, 
return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

** Examples

p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."
*/

// My Solution
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(anotherPerson) {
    if (this.age === anotherPerson.age) {
      return `${anotherPerson.name} is the same age as me.`;
    } else if (this.age < anotherPerson.age) {
      return `${anotherPerson.name} is older than me.`;
    } else {
      return `${anotherPerson.name} is younger than me.`;
    }
  }
}

// Test
p1 = new Person('Samuel', 24);
p2 = new Person('Joel', 36);
p3 = new Person('Lily', 24);
console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

// saved Solution 2
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let i = Math.sign(other.age - this.age),
      x = ['the same age as', 'older than'][i] || 'younger than';
    return `${other.name} is ${x} me.`;
  }
}
