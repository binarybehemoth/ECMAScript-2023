vfunction f(){
   g();
   function g(){console.log('hi');}
}
f();  // hi
g();  // Reference Error
