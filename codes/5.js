f1(function(r1) {
   if (err) failureCallback();
   f2(r1, function(r2) {
      if (err) failureCallback();
      f3(r2, function(r3) {
         if (err) failureCallback();
         console.log('Got the final result: ' + r3);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
