const array = [{
  name: 'Alex',
  age: 10,
  details: [{
    day: 'Monday',
    asst: 'Leo',
    subDetails: [{ color: 'green', qty: 85 }, 
                 { color: 'orange', qty: 35 }]
  },
  {
    day: 'Tuesday',
    asst: 'Shaun',
    subDetails: [{ color: 'brown', qty: 15 }, 
                 { color: 'indigo', qty: 35 }]
  },
  {
    day: 'Wednesday',
    asst: 'Julian',
    subDetails: [{ color: 'pink', qty: 25 }, 
                 { color: 'blue', qty: 15 }]
  },
  {
    day: 'Thursday',
    asst: 'Luis',
    subDetails: [{ color: 'peach', qty: 5 }, 
                 { color: 'black', qty: 15 }]
  },
  ]
}]

var a = array.map(item => ({...item, 
details: [item.details.find(detailsItem => detailsItem.day === "Monday")]}));;
console.log(JSON.stringify(a));

/*
[{"name":"Alex","age":10,"details":[{"day":"Monday","asst":"Leo","subDetails":[{"color":"green","qty":85},{"color":"orange","qty":35}]}]}]
*/
