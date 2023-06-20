let C = (function(){
   const c1 = 100;
   class C {
      static get myConstant(){return c1;}
   }
   return C;
})();
C.myConstant = 10;
console.log(C.myConstant);  // 100
//console.log(c1);  // ReferenceError
