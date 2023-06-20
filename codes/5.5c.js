var thenable =  {then : (onFulfill, onReject) => {onFulfill('fulfilled');}};
Promise.resolve(thenable).then(console.log);   // fulfilled
var p = new Promise(resolve=>{resolve('fulfilled');});    //just identical to the above
p.then(console.log);   // fulfilled
