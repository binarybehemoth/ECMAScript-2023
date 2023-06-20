var f=[];
for (var i = 0; i < 3; i++) {
  f.push(()=>console.log(i));   
                          // ‘i’ determined at the time f[]() is called
}
f[0]();f[1]();f[2]();  // 3 3 3. failed, as all functions share a 
                              // single lexical environment
