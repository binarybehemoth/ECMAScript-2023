var buf1 = new ArrayBuffer(40);
buf1.byteLength; // 40
new Int32Array(buf1)[0] = 42;

var buf2 = ArrayBuffer.transfer(buf1, 80);
buf1.byteLength; // 0
buf2.byteLength; // 80
new Int32Array(buf2)[0]; // 42

var buf3 = ArrayBuffer.transfer(buf2, 0);
buf2.byteLength; // 0
buf3.byteLength; // 0
