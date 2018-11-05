/**
 * Spread Syntax
 */

firstArray = [1, 2, 3];
secondArray = [4, 5, 6];

// const combinedArray = firstArray.concat(secondArray);
const combinedArray = [...firstArray, 'a', ...secondArray, 'b'];


const firstObject = { 
  name: 'John',
  surname: 'Doe',
};

const secondObject = {
  job: 'developer',
  jobId: '765',
};

const bigObject = {
  name: 'Mike',
  surname: 'Oldfield',
  job: 'composer',
  jobId: '76567',
  city: 'New York',
  state: 'USA',
}

const combinedObject = {...firstObject, ...secondObject, location: 'Australia'};
const cloneOfFirst = {...firstObject};

// obracene rozdeleni objektu
const {surname, ...rest} = bigObject;
console.log(rest);
