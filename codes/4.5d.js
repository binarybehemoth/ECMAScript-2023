function C2(){}
C2.prototype.M = ()=>{console.log(1);}
C2.prototype.changeM = ()=>{C2.prototype.M = ()=>{console.log(2);}}
var a = new C2;
var b = new C2;
a.M();  // 1
a.changeM();
b.M();  // 2
