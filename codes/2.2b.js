var o = {a:1,b:'hello',c:{d:2,e:'world'}};
function replacer(key,value){
   return  (key==='d')?(value*10)
            :(typeof value === 'string')?undefined:value;    // filtered out completely!
}
console.log(JSON.stringify(o,replacer));      // {"a":1,"c":{"d":20}}
