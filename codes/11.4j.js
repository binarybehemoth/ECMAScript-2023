for (const c of "abc".match(/./g)) console.log(c);
// a
// b
// c

for (const e of "abc".matchAll(/./g)) console.log(e);
// ["a", "a", index: 0, input: "abc", groups: undefined...]
// ["b", "c", index: 0, input: "abc", groups: undefined...]
// ["b", "c", index: 0, input: "abc", groups: undefined...]
