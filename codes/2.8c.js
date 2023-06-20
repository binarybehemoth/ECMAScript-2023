var C = function () {};
var p = {
    a: function () {
        console.log('a');
    }
};

C.prototype.__proto__ = p;
var o = new C();
o.a(); //a
console.log(C.prototype === o.__proto__);  //true

var o = new C();
o.__proto__ = p;
o.a(); //  a
console.log(C.prototype === o.__proto__);  //false
