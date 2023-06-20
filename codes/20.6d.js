function countVowels(word){
    return [...word].filter(e=>/[aeiou]/.test(e)).length;
}
console.log(countVowels("peninsula"));   // 4
