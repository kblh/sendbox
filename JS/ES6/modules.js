/**
 * Modules
 */

import {Person} from './modules/person';
import {Teacher} from './modules/teacher';

const person = new Person('John');
const teacher = new Teacher('Mosh', 'MUDr');

teacher.teach();
