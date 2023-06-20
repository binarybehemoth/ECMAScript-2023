var p1 = Promise.resolve(300);
var p2 = 100;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'hi');
}); 
Promise.all([p1, p2, p3]).then(console.log); // [300, 100, "hi"] 
