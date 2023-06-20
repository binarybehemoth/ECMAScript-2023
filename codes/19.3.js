var d = new Date('2017-7-16');
   
console.log(d.valueOf());   // 1500134400000
console.log(d.toJSON());    // 2017-07-15T16:00:00.000Z
console.log(d.toISOString());  // 2017-07-15T16:00:00.000Z
console.log(d.toUTCString()); //Sat,15Jul2017 16:00:00 GMT
console.log(d.toString());  // Sun Jul 16 2017 00:00:00 
                                       // GMT+0800 (Malay Peninsula Standard Time)
console.log(d.toDateString());  // Sun Jul 16 2017
console.log(d.toTimeString());  
 //   00:00:00  GMT+0800 (Malay Peninsula Standard Time)
console.log(d.toLocaleString('zh-CN'));   
 // 2017/7/16 上午12:00:00
