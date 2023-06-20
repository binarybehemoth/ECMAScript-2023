var p = new Promise((resolve,reject)=>{ 
      // Promise executed immediately at the time of creation
   resolve(1,999);  console.log(0);            
      // 0. resolve() does not return the function immediately
});
console.log('START');  // logged after 0
p.then(
   (a,b)=>{console.log(a); throw 'e1';}, // 1
   ()=>{console.log(2); }                      // (skipped)
).then(
   ()=>{console.log(3)},                       // (skipped)
   ()=>{console.log(4); return 5;}         // 4
).then(
   n=>{console.log(n); undefinedFn();},// 5
   ()=>{console.log(6)}                        // (skipped)
).then(
   ()=>{console.log(7)}                        // (skipped)
).then(
   ()=>{console.log(8)}                        // (skipped)
).catch (
   console.log                                       // ReferenceError...
).then(
   ()=>{console.log(9); },                     // 9
   ()=>{console.log(10); }                    // (skipped)
).then(
   ()=>{console.log(11); throw 'e2';},   // 11
   ()=>{console.log(12); }                    // (skipped)
);  // ERROR: Uncaught (in promise) e2
