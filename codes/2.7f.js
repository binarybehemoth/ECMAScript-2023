var o = {a:1,b:2,[Symbol('c')]:3,[Symbol('d')]:4};

console.log(Object.entries(o)); // [["a",1],["b",2]]
console.log(Object.fromEntries(Object.entries(o))); 
                                                                   // {a:1, b:2}
console.log(Object.keys(o));    // ["a", "b"]
console.log(Object.values(o));  // [1, 2]

for (v of Object.values(o))    // for...of loop can now be used to iterate over objects!
   console.log(v);   // 1 2
