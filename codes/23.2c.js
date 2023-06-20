let o = {a:{b:1}};
console.log(o.a?.a);   // undefined
console.log(o.x?.a);   // undefined
console.log(x?.a);      // ReferenceError: x is not defined
