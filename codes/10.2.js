var o = {a:10};
var s = Symbol();
o[s] = 20;

// What ignore symbols:
for (p in o) console.log(o[p]);    // 10
console.log(JSON.stringify(o));  // {"a":10}
console.log(Object.entries(o));  // [["a",10],...]
console.log(Object.keys(o));     // ["a"]
console.log(Object.values(o));   // [10]
console.log(Object.getOwnPropertyNames(o));     // ["a"]

// What do not ignore symbols:
console.log(s in o);                        // true
console.log(o.hasOwnProperty(s));  // true
console.log(Object.getOwnPropertySymbols(o)) 
                                                    //[Symbol()]
console.log(Object.getOwnPropertyDescriptor(o,s));  
// {value: 20, writable: true, enumerable: true, 
//   configurable: true}
console.log(Object.getOwnPropertyDescriptors(o));   
                                       // {a: Object, Symbol(): Object}
