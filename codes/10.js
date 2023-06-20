var o={};
var s = Symbol('x');   // (‘x’ is an optional string used for debugging only)
console.log(typeof s);              // symbol
o[s] = 100; console.log(o[s]);  // 100

var so = Object(s);   // (this creates the wrapper indirectly)
console.log(typeof so); // object
console.log(so);  // Symbol {[[PrimitiveValue]]: Symbol(x)}
console.log(o[so]);       // 100
