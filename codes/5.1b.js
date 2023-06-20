function p(){ 
   return new Promise(resolve=>{console.log(1); resolve();});
}
f = f1 => f2 => f3 =>{p().then(()=>console.log(2));}
f()()();
console.log(3);
// 1 3 2
// At first .then() is pushed to the microtask queue, which 
// will be run after the ‘main execution’ ends, ie. call stack 
// becomes completely empty
