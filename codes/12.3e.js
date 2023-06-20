   var a = [0,1,2,3,4,5,6];
   console.log(a.reverse().sort()===a); // true
   console.log(a.sort((a,b)=>{
                               return a-b;})===a.reverse());  // true
