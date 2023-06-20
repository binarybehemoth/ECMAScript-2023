function f(a=5) {
   "use strict";  // SyntaxError
   return a;
}
function g({a}) {
   "use strict";  // SyntaxError
   return a;
}
function h(...a){
   "use strict";  // SyntaxError
   return a;}
