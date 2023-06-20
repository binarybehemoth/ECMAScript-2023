var o = {a:1,b:2};
var m = new Map(Object.entries(o));  // new Map([["a", 1],["b", 2]]);
for (v of m) console.log(v);  // ["a", 1] ["b", 2]
