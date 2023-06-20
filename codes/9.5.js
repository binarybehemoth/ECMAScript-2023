const theBiggestInt = 9007199254740991n
const alsoHuge = BigInt(9007199254740991)
const hugeString = BigInt("9007199254740991")
const hugeHex = BigInt("0x1fffffffffffff")
const hugeBin = BigInt( 
"0b11111111111111111111111111111111111111111111111111111")

console.log(theBiggestInt * theBiggestInt);  
                       // 81129638414606663681390495662081n
console.log(typeof theBiggestInt);  // bigint
console.log(1n === 1);  // false
console.log(1n == 1);  // true
