   var a = Int8Array.from([1,2,3]);
   console.log(a.BYTES_PER_ELEMENT); // 1
   console.log(Int8Array.name); // Int8Array
   console.log(a.buffer); // ArrayBuffer {}
   console.log(a.byteLength); // 3
   console.log(a.byteOffset); // 0
   console.log(Array.isArray(a)); // false
   
   a[1] = 3;
   console.log(a); // [1,3,3]
   a.set([4,5],1);
   console.log(a); // [1,4,5]
   //a.set(a,1);     // RangeError: Source is too large
   
   var b = a.subarray(1,3);
   console.log(b); // [4,5]
   // b.concat(a); // TypeError

   [...c] = [...b];
   console.log(c);  // [4,5]
   console.log(Array.isArray(c)); // true
