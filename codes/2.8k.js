function A() {
  this.property = 'is not enumerable';
}
A.prototype.m1 = function() {};

function B() {
  this.m2 = function () { return 'is enumerable'; };
}
B.prototype = new A;
B.prototype.constructor = B;

var o = new B;
o.x = 99;
console.log(o.propertyIsEnumerable('x'));               // true
console.log(o.propertyIsEnumerable('m2'));            // true
console.log(o.propertyIsEnumerable('property'));     // false
console.log(o.propertyIsEnumerable('prototype'));   // false
console.log(o.propertyIsEnumerable('constructor')); // false
console.log(o.propertyIsEnumerable('m1'));             // false
