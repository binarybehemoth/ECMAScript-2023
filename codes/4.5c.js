function C1(){
   this.M = ()=>{console.log(1);}
   this.changeM = ()=>{this.M = ()=>{console.log(2);}}
}
var a = new C1;
var b = new C1;
a.M();  // 1
a.changeM();
b.M();  // 1
