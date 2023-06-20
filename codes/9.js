   console.log(typeof 100);                      // number
   console.log(typeof new Number(200)); // object
   var n = new Number('300');
   console.log(typeof n);          // object
   console.log(typeof (n**2));  // number
   console.log(n**2);               // 90000
   console.log(new Number("xx"));             // NaN
   console.log(typeof new Number("xx"));   // object
