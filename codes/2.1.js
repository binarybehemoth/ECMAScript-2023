var o={p:100};
console.log(typeof o); // object
console.log(typeof typeof o);  // string
   
var o2 = new Object();
o.o=100;
console.log(o==o2); // false
console.log(typeof o === typeof o2); // true
   
var o3={p:100};
console.log(o==o3); // false
   
var o4=o;
console.log(o===o4); // true
   
console.log(o2 instanceof Object); // true
console.log(o instanceof Object); // true
