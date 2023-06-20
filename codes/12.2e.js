   var a = [3];
   a=a.concat(4,[5,6]);
   console.log(a.join());          // 3,4,5,6
   console.log(a.join('-'));       // 3-4-5-6
   console.log("{"+a+"}");     // {3,4,5,6}  toString() called      
   console.log(a.slice(1)+"");  // 4,5,6  toString() called   
   console.log(a.slice(2,4).toString()); 
                                           //5,6, ‘a’ still not changed
   
   console.log(a.includes([5,6]));                 // false
   console.log(a.includes([5,6],1)); 
                                                //false,search from index 1
   console.log(a.indexOf(4));                       // 1
   console.log(a.indexOf(4,2));     // -1, search from index 2
   console.log([1,[2,3]].lastIndexOf([2,3])); // -1 
   console.log(typeof [1,[2,3]][1]);              // object
   console.log(typeof []);                            // object
   
   a = [1337, new Date(), 'foo'];
   console.log(a.toLocaleString('ja-JP', 
                               { style: 'currency', currency: 'JPY' })); 
