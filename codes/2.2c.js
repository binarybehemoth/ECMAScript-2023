var o = {a:1,b:'hello',c:{d:2,e:'world'}};
console.log(JSON.stringify(o,null,5));     // pretty-printing JSON string
/*{
     "a": 1,
     "b": "hello",
     "c": {
          "d": 2,
          "e": "world"
     }
}*/
