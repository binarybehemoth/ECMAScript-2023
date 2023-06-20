function f(){}
console.log(f.name);  // f

var o = {};
o.g = function(){}
console.log(o.g.name);  // (empty string)
