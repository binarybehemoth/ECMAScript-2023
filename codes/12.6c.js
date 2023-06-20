const a = [[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]];
const r = a.map(e=>Math.max(...e));
console.log(r);    // [-34, -2, 7]
