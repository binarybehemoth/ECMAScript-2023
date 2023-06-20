o = {}; 
o.a = 10;
console.log('a' in o, '__proto__' in o);            // true true
console.log(o.hasOwnProperty('a'),
                 o.hasOwnProperty('__proto__')); // true false
