function p(v){
   return new Promise(resolve=>resolve(v));
}
console.log(await p(3));   // 3
