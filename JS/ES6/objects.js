console.log('=============== Objects ===============');
/**
 * Objects
 */

// Object literal syntax
const aloneCircle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw alone circle');
  }
}; 

aloneCircle.draw();
console.log('aloneCircle.constructor: ' + aloneCircle.constructor);


// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log('draw circle (factory function)');
    }
  };
}

const circle1 = createCircle(1);
circle1.draw();
console.log('circle1.constructor: ' + circle1.constructor);





// Constructor Function
function Circle(radius) {
  // private props and methods
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function(factor) {
    // ...
  }

  // console.log('this', this);
  this.radius = radius;
  this.draw = function(){
    computeOptimumLocation(0.1);
    console.log('draw circle (constructor)');
    console.log('radius: ' + this.radius);
    console.log('defaultLocation x: ' + defaultLocation.x);
  }

  
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      // getter
      return defaultLocation;
    },
    set: function(value) {
      // setter
      if (!value.x || !value.y) {
        throw new Error('Invalid location.');
      }
      defaultLocation = value;
    }
  })


}


const circle2 = new Circle(1);
// empty object
// this - only in object
// return
circle2.draw();

console.log('defaultLocation: ' + circle2.defaultLocation);



console.log('circle2.constructor: ' + circle2.constructor);



// dynamicke pridavani properties
circle2.color = 'red';
circle2.location = { x: 1 };

// jiny zpusob zapisu (muzu zapsat i nevalidni property name)
const propertyName = 'background color';
circle2[propertyName] = 'blue';

// smazba property
delete circle2.location;

console.log(circle2);

// iterace pres object properties a methods
for (let key in circle2) {
  console.log(key + ': ' + circle2[key]);
}

// nebo ...
const keys = Object.keys(circle2);
console.log(keys);

if ('radius' in circle2) {
  console.log('circle2 has a radius');
}

