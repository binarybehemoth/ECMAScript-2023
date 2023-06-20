var a = ['a','b','c'];
var b = a;         
b.push('d');       // item added to ‘a’ too!  
console.log(a);    // ["a", "b", "c", "d"]
var c = a.slice(); 
c.push('e');       // item not added to ‘a’
console.log(a);    // ["a", "b", "c", "d"]
