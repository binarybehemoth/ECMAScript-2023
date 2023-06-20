   console.log(Date.now());  // 1500378966376
   console.log(Date.UTC(2017,07,18)); // 1503014400000
   
   // Tue Jul 18 2017 19:56:06 GMT+0800 
   console.log(Date(Date.now()));
   
   // Fri Aug 18 2017 08:00:00 GMT+0800
   console.log(new Date(Date.UTC(2017,07,18)));
