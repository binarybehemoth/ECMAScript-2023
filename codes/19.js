console.log(Date());  // current date and time
// Tue Jul 18 2017 17:56:58 GMT+0800 ...

console.log(new Date());  // current date and time
// Tue Jul 18 2017 17:56:58 GMT+0800 ...
   
console.log(new Date(1234567890123)); // ms since 1970 
// Sat Feb 14 2009 07:31:30 GMT+0800 ...
   
console.log(new Date('25 May 1982'));
// Tue May 25 1982 00:00:00 GMT+0800 ...
   
console.log(new Date('25-05-1982'));
// Invalid Date

console.log(new Date('05-25-1982'));
// Tue May 25 1982 00:00:00 GMT+0800 ...
   
console.log(new Date('05/25/1982 10:00'));
// Tue May 25 1982 10:00:00 GMT+0800 ...

console.log(+(new Date())); 
// 1500464861478

console.log((new Date()) > (new Date('05-30-2015'))); 
// true

console.log(new Date(1982,4,25,13));
// Fri May 25 1982 13:00:00 GMT+0800 ...
   
console.log(new Date(1982,13,25,13,25,33,3333));
// Fri Feb 25 1983 13:25:36 GMT+0800 ...
