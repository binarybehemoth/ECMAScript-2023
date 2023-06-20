p1.then(function(r1) {
  return f2(r1);
}).then(function(r2) {
  return f3(r2);
}).then(function(r3) {
  console.log('Got the final result: ' + r3);
}).catch(failureCallback);
