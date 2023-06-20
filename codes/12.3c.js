var a = [0,1,2,3,4,5,6];
a.fill('x',5,8);       // [0,1,2,3,4,'x','x']
Array(10).fill('x');  
                   // ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
a.splice(2,3);       // [0,1,'x','x']
a.splice(2,2,9,9); // [0,1,9,9]
a.unshift(1,2);     // [1,2,0,1,9,9]
a.push(4,5,6);     // [1,2,0,1,9,9,4,5,6]
console.log(a);    // [1,2,0,1,9,9,4,5,6]
console.log(a.shift()); // 1
console.log(a.pop());  // 6
console.log(a);  // [2,3,4,5]
   
// .copyWithin(a,b=0,c=arr.length) means shallow-copies 
// elements b to c(excluding c) to location a. Negative 
// parameters are relative to the end.
[1, 2, 3, 4, 5].copyWithin(-2);             // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3);          // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);      // [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);  // [1, 2, 3, 3, 4]
[].copyWithin.call({length: 5, 3: 1}, 0, 3);
                                                  // {0: 1, 3: 1, length: 5}
