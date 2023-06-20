<!DOCTYPE html>
<html><body><script>
   var a;
   console.log(typeof a);  // undefined
   console.log(typeof b);  // undefined
   
   var b = document.getElementById("x");
   console.log(b);     // null
   
   console.log(a==b);  // true
   console.log(a===b); // false
   
   var c = null;
   var d = undefined;
   console.log(c+d);   // NaN
   console.log(typeof (c+d));   // number
   
   var e = new Object();
   console.log(e);     // Object {}
   console.log(e.a);   // undefined

   if (typeof yourvar == 'undefined') console.log("variable does not exist");
</script></body></html>
