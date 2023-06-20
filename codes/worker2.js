// worker2.js
self.addEventListener('message', function (event) {
    const {SBUF} = event.data;
    const sa = new Int32Array(SBUF); // (A)
    Atomics.wait(sa,0,0);
    console.log('notified');
});
