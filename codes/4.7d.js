var g=[];
for (let i = 0; i < 3; i++) {
  g.push(()=>console.log(i));
}
g[0]();g[1]();g[2](); // 0 1 2. passed, as the variable isn’t 
                               // shared in the lexical environment
