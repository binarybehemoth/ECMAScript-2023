console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN);  // NaN
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.POSITIVE_INFINITY);   // Infinity
   
console.log(NaN);                 // NaN
console.log(typeof Infinity);   // number
// console.log(NEGATIVE_INFINITY);  // ReferenceError
   
Number.prototype.double = function (){
   return this.valueOf() * 2;
}
console.log((20).double().double());  // 80
