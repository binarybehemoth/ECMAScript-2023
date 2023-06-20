function f() {
  'use strict';
  arguments.callee;  // TypeError
  f.caller;                 // TypeError
  f.arguments;         // TypeError
}
f();
