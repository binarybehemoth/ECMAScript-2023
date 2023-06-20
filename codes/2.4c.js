var a = [1,2,3];
delete a[1];
console.log(a); // [1,undefined,3]
a.splice(1,1);
console.log(a); // [1,3]
