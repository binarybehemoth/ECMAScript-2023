setTimeout(()=>console.log('#'));
async function a(){
   setTimeout(()=>console.log('@'));
   for (let i=0; i<10; i++)
      console.log(await (new Promise(resolve=>{
            for (let j=0; j<=2; j++) console.log(j);
            resolve(1000); 
            console.log('+');
         })).then(()=>{
            for (let j=0; j<=2; j++) console.log(j+'a'); 
            return 20000;
         }).then(()=>{
            for (let j=0; j<=2; j++) console.log(j+'aa');  
            return 50000;}));
   return 'aaa';
}

async function b(){
   setTimeout(()=>console.log('$'));
   for (let i=0; i<10; i++)
      console.log(await (new Promise(resolve=>{
             for (let j=5; j<=7; j++) console.log(j);
             resolve(3000); 
             console.log('*');
      })).then(()=>{
             for (let j=5; j<=7; j+=1) console.log(j+'b'); 
             return 30000;
      }).then(()=>{
             for (let j=5; j<=7; j+=1) console.log(j+'bb'); 
             return 70000;
      }));
   return 'bbb';
}
a().then(x=>{console.log(x)})
    .then(x=>{console.log('aEND');});
console.log('XXX');
b().then(x=>{console.log(x)})
     .then(x=>{console.log('bEND');});
console.log('YYY');

/* 
0 1 2 + XXX 5 6 7 * YYY 0a 1a 2a 5b 6b 7b 0aa 1aa 2aa 5bb 6bb 7bb 50000
0 1 2 + 70000 5 6 7 * 0a 1a 2a 5b 6b 7b 0aa 1aa 2aa 5bb 6bb 7bb 50000
0 1 2 + 70000 5 6 7 * 0a 1a 2a 5b 6b 7b 0aa 1aa 2aa 5bb 6bb 7bb 50000
0 1 2 + 70000 5 6 7 * 0a 1a 2a 5b 6b 7b 0aa 1aa 2aa 5bb 6bb 7bb 50000
...(repetitions)
70000 aaa bbb aEND bEND # @ $
*/
