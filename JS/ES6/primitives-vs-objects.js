
console.log('=============== Primitives vs Objects ===============');
/**
 * Value Types (Primitives)
 * Number, String, Boolean, Symbol, undefined, null
 * 
 * Reference Types (Objects)
 * Object, Function, Array
 */

// Primitives - copied by their value
let aa = 10;
let bb = aa;
aa = 20;
// aa = 20
// bb = 10

// Objects - copied by their reference
let cc = { value: 10 };
let dd = c;
cc.value = 20;
// cc = { value: 20 }
// dd = { value: 20 }



let numberIsPrimitive = 10;
function increase(numberIsPrimitive) {
  numberIsPrimitive++;
}
increase(numberIsPrimitive);
console.log('numberIsPrimitive: ' + numberIsPrimitive);


let objIsObject = { value: 10 };
function increase(objIsObject) {
  objIsObject.value++;
}
increase(objIsObject);
console.log('objIsObject: ' + objIsObject);


