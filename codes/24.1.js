'use strict';
var eval = 17;                                // SyntaxError
arguments++;                               // SyntaxError
++eval;                                         // SyntaxError
var obj = { set p(arguments) { } }; // SyntaxError
var eval;                                        // SyntaxError
try { } catch (arguments) { }          // SyntaxError
function x(eval) { }                        // SyntaxError
function arguments() { }                // SyntaxError
var y = function eval() { };             // SyntaxError
var f = new Function('arguments', 
                    "'use strict'; return 17;"); // SyntaxError
