var m;
outerloop:
for (let i=0; i<10; i++){
   for (let j=0; j<10; j++){
      m=i*j;      
      if (j>8) continue;
      if (m>50) break outerloop;
   }
}
console.log(i+"*"+j+"="+m);  // 7*8=56
