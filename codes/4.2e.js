//f1(); var f1 = ()=>{console.log(typeof f1);}  // TypeError
f2(); function f2(){console.log(typeof f2);} // function
// f3(); if (true) function f3(){console.log(typeof f3);} // TypeError
if (true){f4();function f4(){console.log(typeof f4);}}  // function
