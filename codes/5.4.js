(function test() {
setTimeout(function() {console.log(6)}, 9);  
       // queued into the macrotask queue as another task
setTimeout(function() {console.log(5)}, 0);  
       // the argument 0 is optional here
    new Promise(function executor(resolve) {
        console.log(1);
        for( var i=0 ; i<10000000000; i++ )  
                         i == 9999 && resolve();    // a long pause!
        console.log(2);
}).then(function() {  
                        // first queued into the microtask queue
        console.log(4);
    });
    console.log(3);
})();     // 1 2 3 4 5 6
