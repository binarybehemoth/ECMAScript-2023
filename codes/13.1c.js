   var buf1 = new ArrayBuffer(8);
   var buf2 = buf1.slice(0);
   var buf3 = buf1.slice(2,4);
   console.log(buf3.byteLength); // 2
