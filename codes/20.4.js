   var r1 = /abc/gi;
   var r2 = new RegExp("def","yu"); 
   console.log(r1.source);  // abc
   console.log(r2.flags);  // yu
   console.log((/abc/m).multiline);  // true
