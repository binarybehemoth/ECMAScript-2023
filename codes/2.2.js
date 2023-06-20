   var o={a:10}, o2={x:5};
   o.b=o2;
   o.c=[o2,o2];
   o.d=new Boolean(true);
   o.e=function(){return 9;};  // a function won’t be stored
   var s = JSON.stringify(o);
   console.log(s);      
        // {"a":10,"b":{"x":5},"c":[{"x":5},{"x":5}],"d":true}
   var ro = JSON.parse(s);
   console.log(ro.c[1].x); // 5
