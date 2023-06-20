Promise.reject(100).then(
   console.log,
   n => {console.log(n*2)}
);  // 200
