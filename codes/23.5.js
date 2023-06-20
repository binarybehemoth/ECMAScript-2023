var flagA = 0b0001;
var flagB = 0b0010;
var flagC = 0b0100;
   var flagD = parseInt('1000',2);
   
var myFlag = flagB | flagC; // Assign flagB, flagC to myFlag
console.log(myFlag.toString(2)); // 110
console.log((~myFlag).toString(2)); // -111
if (myFlag & (flagA | flagB)) //Does myFlag have flagA/flagB? 
    console.log((myFlag & (flagA | flagB)).toString(2)); // 10
if (myFlag & ~flagD)
    console.log((myFlag & ~flagD).toString(2)); // 110
	   
console.log(flagB.toString(2));           // 10  
console.log((flagB<<1).toString(2));  // 100 add 0 at right
console.log((flagB>>1).toString(2));  // 1 add 0 at left
   
var n = -9;
console.log(n.toString(2));	           // -1001
console.log((n>>2).toString(2));    // -11
console.log((n>>>2).toString(2));  
                             // 111111111111111111111111111101
