const r = /greeting(\d)/dg;
const s = 'greeting1greeting2';
console.log(...s.matchAll(r));
