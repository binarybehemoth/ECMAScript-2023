var o={p1:5,
       "p2":"Ali",
       "":[1,2],                           // arrays can be stored
       "!@":(x)=>{return x;}};  // functions can be stored
console.log(o.p2);           // Ali
var s = "p1", t="p3";
console.log(o[s]);            // 5
console.log({t: 8});         // {t: 8}
console.log({[t]: 10});     // {p3: 10}
console.log(o[""]);           // [1,2]
console.log(o["!@"](10)); // 10
