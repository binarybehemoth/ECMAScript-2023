function myobject(){this.value = 5;}
myobject.prototype.add = function(){ this.value++; }
function objectchanger(fnc){ fnc(); }
var o = new myobject();
objectchanger(o.add);
console.log(o.value);          // 6
