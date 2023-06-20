var o1 = {
   a:1,
   [Symbol('b')]:2,
   c: {cc:3},
   get d(){ return 4;}
}
var o2 = {
   a:10,
   e:{value:3, enumerable:true},
   f:x=>x
}
var o = Object.assign({},o1,o2,'hello',null,100,undefined,Symbol('b'));
console.log(o); 
// Object {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", a: 10, 
//             c: Object, d: 4, e: Object, f: function...}
