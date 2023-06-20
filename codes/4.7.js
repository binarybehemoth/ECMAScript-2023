function f(num){
   // 1. Function Declaration
   function a(){num++; return num;}
   
   // 2. Function Expression / Anonymous Function
   var b = function(){num++; return num;};
   
   // 3. Recursive Function Expression
   var c = function d(n){if (n==1) return 1; 
                                   else return n+d(n-1);};

   // 4. Function Constructor
   var e = new Function('a','b','return (a+b);');   
   console.log (a());
   console.log (b());
   console.log (c(4));
   console.log (typeof(c));
   console.log (typeof(d));
   console.log (e(2,3));
   console.log ((function (n){return n;})(100));

   return e;
}
console.log(f(1)(3,4)); // 2,3,10,function,undefined,5,100,7
var g = f(1);
console.log(g(5,6)); // 2,3,10,function,undefined,5,100,11
