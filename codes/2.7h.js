console.log(-0===0,          // true
            Object.is(-0,0));    // false

console.log(NaN===NaN,      // false
            Object.is(NaN,NaN)); // true
