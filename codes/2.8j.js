var a = [10,20];  a.v=30;
console.log(a.propertyIsEnumerable(0));                 // true
console.log(a.propertyIsEnumerable('v'));                // true
console.log(a.propertyIsEnumerable('constructor')); // false
console.log(a.propertyIsEnumerable('length'));        // false
console.log(this.propertyIsEnumerable('Math'));      // false
console.log(Math.propertyIsEnumerable('random'));// false
