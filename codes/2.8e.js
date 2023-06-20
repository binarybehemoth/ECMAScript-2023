function N() {this.x=1;}
N.prototype.valueOf = function(){this.x++;return this.x;}
var n = new N;
console.log(n);     // N {x: 1}
console.log(n+1); // 3
console.log(n);     // N {x: 2}
console.log(n+n); // 7   ... 3 + 3 + 1
