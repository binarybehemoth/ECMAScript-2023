var ws = new WeakSet();
var o = {};
	
ws.add([1,2]); 
console.log(ws.has([1,2]));  // false
	
ws.add(o); ws.add(o); ws.delete(o);
console.log(ws.has(o));  // false
