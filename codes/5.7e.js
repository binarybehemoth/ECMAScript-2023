async function *ag(v){
   while(true) yield (await 
                    (new Promise(resolve=>resolve(v++))));
}
var gen = ag(3);
console.log((await gen.next()).value);  // 3
console.log((await gen.next()).value);  // 4
