/**
 * Object destructuring
 */

const address = {
  street: 'Long street',
  city: 'Prague',
  country: 'Czech Republic',
}

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { city, country } = address;
const { street: st } = address;

console.log(st);
console.log(city);
console.log(country);
