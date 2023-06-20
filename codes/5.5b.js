var p = new Promise(resolve=>{
   resolve(100);
});
console.log(Promise.resolve(p) === p); // true
Promise.resolve(p).then(
   console.log,
   n => {console.log(n*2)}
);  // 100
