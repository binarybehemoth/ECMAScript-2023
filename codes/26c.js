let i = 0;
let a = { [Symbol.toPrimitive]: () => ++i };
if(a == 1 && a == 2 && a == 3) console.log('possible 3');
