(new Promise((resolve,reject)=>{
   console.log(1);
   resolve();
})).then(
   ()=>{console.log(2);}
);
console.log('START');
// 1, START, 2
