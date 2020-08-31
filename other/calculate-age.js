let person = {
  name: 'Anton',
  birthday: '1991-1-21',
  age() {
    let birthYear = new Date(this.birthday).getFullYear();
    let thisYear = new Date().getFullYear();

    return thisYear - birthYear;
  },
};

//console.log(person.age());

function Human(name, bday) {
  this.name = name;
  this.birthday = new Date(bday);
  this.getAge = function () {
    let birthYear = new Date(this.birthday).getFullYear();
    let thisYear = new Date().getFullYear();

    return thisYear - birthYear;
  };
}

let anton = new Human('Anton', '1991-1-21');

console.log(anton);

class Alien {
  constructor(name) {
    this.name = name;
  }
  getAge() {
    return 29;
  }
}

let zerg = new Alien('Zerg');
console.log(zerg);
