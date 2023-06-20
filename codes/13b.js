   var a = new Array(1024);
   var ta = Float64Array.from(a);
   var t1 = Date.now();
   for (i=0; i<100000; i++) a.copyWithin(0);
   var t2 = Date.now();
   for (i=0; i<100000; i++) ta.copyWithin(0);
   var t3 = Date.now();
   console.log(t2-t1); // 3987
   console.log(t3-t2); // 12
