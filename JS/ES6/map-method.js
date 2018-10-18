/**
 * Map method for arrays
 */

const colors = ['red', 'green', 'blue'];

// const items = colors.map( function(color) {
//   return '<li>' + color + '</li>';
// });


// const items = colors.map(color => '<li>' + color + '</li>');

// template literal
const items = colors.map(color => `<li>${color}</li>`);
