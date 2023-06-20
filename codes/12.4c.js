var a = [1,2,,3,,3,null,,0,,undefined,4,,4,,5,,6,,,,];
a = a.filter(n => n);
console.log(a); // [1, 2, 3, 3, 4, 4, 5, 6]
