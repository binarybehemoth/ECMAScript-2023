var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
// Operations at location 0
Atomics.store(ta, 0, 12);
Atomics.load(ta, 0);
Atomics.compareExchange(ta, 0, 12, 15);
Atomics.add(ta, 0, 20);
