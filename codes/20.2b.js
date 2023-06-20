const r = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const d = r.exec("2020-07-29");

/*
d.groups.year === "2020"
d.groups.month === "07"
d.groups.day === "29"

d[0] === "2020-07-29"
d[1] === "2020"
d[2] === "07"
d[3] === "29"
*/

let {groups:{year,month,day}} = d;  // destructuring
console.log(year,month,day);  // 2020 07 29
