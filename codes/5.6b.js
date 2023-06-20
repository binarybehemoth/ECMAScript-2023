var p1 = new Promise(resolve=>{setTimeout(resolve,400,'1');});
var p2 = new Promise(resolve=>{setTimeout(resolve,500,'2');});
var p3 = new Promise(resolve=>{setTimeout(resolve,600,'3');});

Promise.all([p1,p2,p3]).then(  
// the iterable argument can be any iterable, not just array
   a => {for (v of a) console.log(v);}
);
console.log('START');
// START, 1, 2, 3   (after 6 seconds)
