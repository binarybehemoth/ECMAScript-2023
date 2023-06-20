var o = {a:x=>x};
console.log(JSON.stringify(o));  // {}

function replacer(key,value){
   return (typeof value === 'function')? "/Function(" + value.toString() + ")/":value;
}
function reviver(key,value){
   var f = new Function(+value);
   return (typeof value === "string" && 
     value.startsWith("/Function(") && value.endsWith(")/"))?
            eval("("+value.substring(10, value.length - 2)+")")
           :value;
}
var o2 = JSON.parse(JSON.stringify(o,replacer),reviver);
console.log(o2.a(10));  // 10
