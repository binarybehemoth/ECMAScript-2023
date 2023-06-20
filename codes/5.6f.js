var p1 = new Promise((resolve,reject)=>{
   setTimeout(reject,500,'1');
});
var p2 = new Promise((resolve,reject)=>{
   setTimeout(resolve,100,'2');
});
var p3 = new Promise((resolve,reject)=>{
   setTimeout(resolve,1000,'3');
});
Promise.all([p1,p2,p3]).then(
   a => {for (v of a) console.log('(all)'+v);},
   e => {console.log('rejected(all):'+e);}
);
Promise.race([p1,p2,p3]).then(
   a => {for (v of a) console.log('(race)'+v);},
   e => {console.log('rejected(race):'+e);}
);
Promise.allSettled([p1,p2,p3]).then(
   a => {for (v of a) console.log('(allSettled)'+JSON.stringify(v));},
);

console.log('START');
// START, 
// (race)2,
// rejected(all):1
// (allSettled){"status":"rejected","reason":"1"}
// (allSettled){"status":"fulfilled","reason":"2"}
// (allSettled){"status":"fulfilled","reason":"3"}
