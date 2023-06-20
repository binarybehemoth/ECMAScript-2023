'use strict';
function f() { console.log(this); }
f();                      // undefined, not Window object
f.call(2);              // 2, not Number object
f.apply(null);        // null, not Window object
f.call(undefined);  // undefined, not Window object
f.bind(true)();      // true, not Boolean object
