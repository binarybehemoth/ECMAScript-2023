var nameList = [
{name:'Mike',age:12,sex:'m'},
{name:'Jane',age:11,sex:'f'},
{name:'Alvin',age:13,sex:'m'}];
function comparator(a,b){
   return (a.name < b.name)?-1
           :(a.name > b.name)?1:0
}
console.log(JSON.stringify(nameList.sort(comparator)));
/*
[{name:'Alvin',age:13,sex:'m'}
 {name:'Jane',age:11,sex:'f'},
 {name:'Mike',age:12,sex:'m'}]
*/
