async function af1(){
   for (let i=0; i<3; i++)
      await (new Promise(
             (resolve,reject)=>{console.log(1);resolve();}))
           .then(()=>{console.log(2);});
}
async function af2(){
   for (let i=0; i<3; i++)
      await (new Promise(
  	   (resolve,reject)=>{console.log(3);resolve();}))
	.then(()=>{console.log(4);});
}
af1();
af2();
// 1 3 2 4 1 3 2 4 1 3 2 4
// without ‘async’ and ‘await’: 1 1 1 3 3 3 2 2 2 4 4 4
