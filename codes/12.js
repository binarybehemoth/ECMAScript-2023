   var arr=[3];    // an element
   arr.p = {x:1}; // an object as a property
   arr[1] = 5;      // an array element
   arr[1.5] = 6;   // an object property
   alert(arr[0]);       // 3
   alert(arr[1]);       // 5
   alert(arr.p);        // [object Object]
   alert(arr.length); // 2
   alert(arr.hasOwnProperty(1.5));  // true
   arr[30] = {y:2};     // an object as an element
   alert(arr['length']);  // 31
   alert(arr[1.5]);        // 6
   arr.length = 3;        // truncates the array
   alert(arr[30]);         // undefined
