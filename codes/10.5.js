var s = Symbol('h');
console.log(s.toString()); // Symbol(h)
console.log(s.valueOf());  // Symbol(h)
//console.log(s+"");         // TypeError
//console.log(s+0);          // TypeError
