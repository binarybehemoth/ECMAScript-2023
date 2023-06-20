console.log(3<3);   // false
console.log(3<=3);  // true
console.log(3==3);  // true
console.log(3===3); // true
   
console.log(3==new Number(3));      // true
console.log(3===new Number(3));    // false
console.log(typeof 3);                        // number
console.log(typeof new Number(3));   // object
console.log(new Number(3)==new Number(3));    // false
console.log(new Number(3)===new Number(3));    // false
