var h=[];
for (var i = 0; i < 3; i++) {
   (n=>{h.push(()=>console.log(n));})(i);    // another closure
}
h[0]();h[1]();h[2]();  // 0 1 2. passed, as each callback is 
                     // attached to a separate lexical environment
