// {a,b} = {};  // SyntaxError
var {a,b} = {};  // a and b declared but undefined
//var {a,b:[c]}={};//TypeError:nested structure undetected
//var {a,b:{c}} = {};//TypeError: nested structure undetected
var {a,b:[c]} = {b:[5]};  // a,b declared but undefined. c===5.
//var {a,b:{c=5}} = {}; // TypeError
