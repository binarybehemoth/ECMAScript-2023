var a = ['a','b','c'];
delete a[0];
a.splice(1,1);
console.log(a); // [undefined,"c"]
