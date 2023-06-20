   var a='123'; console.log(a); // 123
   var b="a'b'c"; console.log(b); // a'b'c
   var c=`${a}`; console.log(c); // 123
   var c=`${a+b}`; console.log(c); // 123a'b'c

   console.log("hello \
                     world"); // hello                 world
   console.log(`hello
                      world`);  // hello
                                     //          world
   console.log(`${3+4}-eleven`);  // 7-eleven
