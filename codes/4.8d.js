<!DOCTYPE html><html><head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head><body><script>

(function(myStuff, $, undefined ) {  // class definition
    var a = 100;     // private
    function f(){      // private 
       console.log('hello');
    };
    myStuff.b = 200;           // public
    myStuff.g = function(){  // public
       f();
    }
}( window.myStuff = window.myStuff || {},jQuery));

(function(myStuff, $, undefined ) {// easily extended
    var c = 100;    // private
    function h(){   // private 
       console.log('world');
    };
    myStuff.d = 200;         // public
    myStuff.i = function(){  // public
       h();
    }
}( window.myStuff = window.myStuff ||{},jQuery ));

console.log(myStuff); // Object {b: 200, d: 200, g: function, i: function}
//myStuff.f();  // TypeError
myStuff.g();  // hello
//myStuff.h();  // TypeError
myStuff.i();  // world

</script></body></html>
