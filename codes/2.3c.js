// rest:  ... at LHS
const {b, ...o2} = {a:1,b:2,c:3};
console.log(o2) // {a:1,c:3}  ‘b’ removed!

// spread: ... at RHS
const o = {b, ...o2}
console.log(o)  // {b:2,a:1,c:3}; 'b' returned!
