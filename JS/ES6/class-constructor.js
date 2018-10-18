/**
 * Class
 * with constructor method
 */

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk ...');
  }
}


class Teacher extends Person {
  constructor (name, degree) {
    super(name); // inicialize name property
    this.degree = degree;
  }

  teach() {
    console.log('teaching ...');
  }
}


const person = new Person('John');
const teacher = new Teacher('Mosh', 'MUDr');

teacher.teach();
