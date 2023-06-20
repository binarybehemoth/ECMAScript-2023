var n=0;
var intervalID = setInterval((a,b)=>{
   n++;
   if (n>b) clearInterval(intervalID);
   if (n>=a) console.log(n+ ' seconds have lapsed.');
},1000,5,7);
// 5 seconds have lapsed.
// 6 seconds have lapsed.
// 7 seconds have lapsed.
// 8 seconds have lapsed.
