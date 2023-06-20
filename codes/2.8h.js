function C(){this.a = 1;}
C.prototype.b = 2;
var o = new C;
console.log(o.b);  // 2
for (let p in o) {
    console.log(p);
if (o.hasOwnProperty(p)) 
    console.log("ownProperty: "+p);
}   // a   ownProperty: a     b
