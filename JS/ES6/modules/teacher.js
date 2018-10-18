import { Person } from './person';

export class Teacher extends Person {
  constructor (name, degree) {
    super(name); // inicialize name property
    this.degree = degree;
  }

  teach() {
    console.log('teaching ...');
  }
}

