var o = {a:1,b:{c:2,d:[3,4]}};
var a,{b,c=10,b:{d:[,e,f=5]},d} = o;
console.log(b); // {c: 2, d: [3,4]}
console.log(c); // 10
console.log(d); // undefined
console.log(e); // 4
console.log(f); // 5
