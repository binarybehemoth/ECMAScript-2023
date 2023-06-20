console.log(Symbol()   == Symbol());    // false
console.log(Symbol()   ===Symbol());    // false
console.log(Symbol('x')== Symbol('x')); // false
console.log(Symbol('x')===Symbol('x')); // false
var o = {};
var s = Symbol('y');
o[s] = 100;
console.log(o[Symbol('y')]);  // undefined
