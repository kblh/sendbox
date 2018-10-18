/**
 * POLYFILL
 */

// log("it does not work :-(");

if (!window.log) {
  window.log = msg => console.log(msg);
}
log("hurray, polyfill works!");
