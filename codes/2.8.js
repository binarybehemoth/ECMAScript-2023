var o = {};               console.log(o.constructor===Object,o.constructor.name);
var o = new Object;       console.log(o.constructor===Object,o.constructor.name);
var a = [];               console.log(a.constructor===Array,o.constructor.name);
var a = new Array;        console.log(a.constructor===Array,o.constructor.name);
var n = new Number(3);    console.log(n.constructor===Number,o.constructor.name);
// true "Object"   (for each line)

function C(){this.x=100;}
console.log(C);                            // function C(){this.x=100;}
console.log(C.constructor);           // function Function() { [native code] }
console.log(C.constructor.name);  // Function
