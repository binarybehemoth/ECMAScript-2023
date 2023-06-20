setTimeout(()=>{console.log(1000);},1000); console.log(1);
setTimeout(()=>{console.log(200);},200);    console.log(2);
setTimeout(()=>{console.log(500);},500);    console.log(3);
// 1,2,3,200,500,1000
