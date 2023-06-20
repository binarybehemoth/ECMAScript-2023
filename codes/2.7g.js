var o = {a:1};
Object.seal(o); delete o.a;                console.log(o.a); // 1
Object.preventExtensions(o); o.b=5; console.log(o);//{a:1}
Object.freeze(o); o.a=10;                 console.log(o.a); // 1
console.log(Object.isSealed(o));       // true
console.log(Object.isExtensible(o));  // false
console.log(Object.isFrozen(o));       // true
