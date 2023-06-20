var target1 = {}, target2 = {};
o1 = Object.assign(target1, {a:1});
o2 = Object.create(target2, {b:{value:2}}); // b is a propertyDescriptor
console.log(o1===target1,o1.a);  // true 1
console.log(o2===target2,o2.b);  // false 2

console.log(Object.getOwnPropertyDescriptor(o1, 'a'));
// Object {value: 1, writable: true, enumerable: true, 
// configurable: true}

console.log(Object.getOwnPropertyDescriptor(o2, 'b'));
// Object {value: 2, writable: false, enumerable: false, 
// configurable: false}
