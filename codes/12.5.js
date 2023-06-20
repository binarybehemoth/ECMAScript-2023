var [a,b,c] = [1,2,3,4,5,6];
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3

var [ a = 1,, b = 3, c ] = [ 7, 42 ];
console.log(a); // 7
console.log(b); // 3
console.log(c); // undefined

var [d,e,f] = "def";  // any iterable will do
console.log(d); // d
console.log(e); // e
console.log(f); // f
