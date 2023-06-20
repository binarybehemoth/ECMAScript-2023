var buf = new ArrayBuffer(16);
var dv = new DataView(buf, 4, 8); // 2nd & 3rd arg optional
console.log(dv.byteLength); // 8
console.log(dv.byteOffset); // 4
dv.setInt16(6, 42);
console.log(dv.getInt16(6)); //42
