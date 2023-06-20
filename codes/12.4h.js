const a1 = [1,[2,3,[4,5],6],7];
console.log(a1.flat());          // [1,2,3,[4,5],6,7]
console.log(a1.flat(Infinity));  // [1,2,3,4,5,6,7]

const a2 = ['Who says learning JavaScript is not fun?',
                  'Are you kidding me?'];
console.log(a2.flatMap(e=>e.split(' ')));  
//["Who", "says", "leaning", "JavaScript", "is", "not", "fun?", "Are", "you", "kidding", "me?"]
