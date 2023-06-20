var gs = Symbol.for('my global symbol');
console.log(gs);                    // Symbol(my global symbol)
console.log(gs===Symbol.for('my global symbol'));  // true
console.log(Symbol.keyFor(gs));          // my global symbol
console.log(Symbol.keyFor(Symbol('local')));    // undefined
console.log(Symbol.keyFor(Symbol.iterator);    // undefined
