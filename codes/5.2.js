new Promise((resolve,reject)=>{
    resolve(2);
}).finally(()=>{
    console.log('executed on resolving');
}).then(x=>{
    console.log(x);    // 2
    throw 'reject this';
}).finally(()=>{
    console.log('executed on rejection too');
}).catch(e=>{
    console.log(e);   // reject this
})
