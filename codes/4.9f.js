function isGenerator(fn) { return fn.constructor.name === 'GeneratorFunction';}
function f(){}
function* g(){}
console.log(isGenerator(f));  // false
console.log(isGenerator(g));  // true
console.log(g instanceof (function*(){}).constructor); //true
