var o = {a:1,b:2};
delete o.a;
console.log('a' in o);  // false
console.log(JSON.stringify(o));  // {"b":2}
o.b=undefined;
console.log('b' in o);  // true
console.log(JSON.stringify(o)); // {}
