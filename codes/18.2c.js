console.log(Math.random().toString(36).substr(2, 5)); //l8ed3
// 5 random alphanumeric characters (small), 
// for a random ID perhaps
// 36 possible characters

console.log(btoa(Math.random()).substring(3,11).replace(/=/g,"q")); // xMTA0MjE
// 8 random alphanumeric characters (capital and small), 
// for a random ID perhaps
// 62 possible characters
