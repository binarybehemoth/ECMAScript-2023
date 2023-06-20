var a = [3,5,9,1,3,2,4,7,8];
   
function square(n){return n*n;}
console.log(a.map(square));  // [9,25,81,1,9,4,16,49,64]
   
function printSquare(n){console.log(n*n);}
a.forEach(printSquare);  // 9 25 81...
