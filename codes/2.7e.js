var o = {a:1,b:2,[Symbol('c')]:3,[Symbol('d')]:4};

console.log(Object.getOwnPropertyDescriptor(o,'a'));
// Object {value: 1, writable: true, enumerable: true, configurable: true}

console.log(Object.getOwnPropertyDescriptors(o));
// Object {a: Object, b: Object, Symbol(c): Object, Symbol(d): Object}

console.log(Object.getOwnPropertyNames(o));
// ["a", "b"]

console.log(Object.getOwnPropertySymbols(o));
// [Symbol(c), Symbol(d)]

console.log(Object.getPrototypeOf(o));
/*
Object {
   constructor:function Object()
   hasOwnProperty:function hasOwnProperty()
   isPrototypeOf:function isPrototypeOf()
   propertyIsEnumerable:function propertyIsEnumerable()
   toLocaleString:function toLocaleString()
   toString:function toString()
   valueOf:function valueOf()
   __defineGetter__:function __defineGetter__()
   __defineSetter__:function __defineSetter__()
   __lookupGetter__:function __lookupGetter__()
   __lookupSetter__:function __lookupSetter__()
   get __proto__:function __proto__()
   set __proto__:function __proto__()
} */
