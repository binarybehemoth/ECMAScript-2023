   var s = "Hello你好"; 
   var r = /e/y;
   r.lastIndex = 0;
   console.log(r.test(s)); // false
   r.lastIndex = 1;
   console.log(r.test(s)); // true
   r.lastIndex = 5;
   console.log(r.test(s)); // false
