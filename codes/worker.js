// worker.js
onmessage = function(e) {
    e.data[0]++;                // last line is 981 only? wth?!
    //Atomics.add(e.data,0,1);  // last line is exactly 1000. right...
    console.log(e.data[0]);
}
