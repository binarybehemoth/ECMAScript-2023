var a = [1,2,3];
a.join = a.shift;
if(a == 1 && a == 2 && a == 3) console.log('possible 2');
