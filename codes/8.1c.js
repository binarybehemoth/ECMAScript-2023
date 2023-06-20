const
   nullValue = null,
   numberValue = 300,
   zeroValue = 0,
   emptyValue = '',
   falseValue = false;

console.log(nullValue || 'DEFAULT');       // DEFAULT
console.log(numberValue || 'DEFAULT'); // DEFAULT
console.log(zeroValue || 'DEFAULT');      // DEFAULT
console.log(emptyValue || 'DEFAULT');   // DEFAULT
console.log(falseValue || 'DEFAULT');     // DEFAULT
console.log("........................");
console.log(nullValue ?? 'DEFAULT');        // DEFAULT
console.log(numberValue ?? 'DEFAULT');  // DEFAULT
console.log(zeroValue ?? 'DEFAULT');       // 0
console.log(emptyValue ?? 'DEFAULT');    // ''
console.log(falseValue ?? 'DEFAULT');      // false
