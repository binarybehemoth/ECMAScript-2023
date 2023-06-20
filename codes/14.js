var s1 = new Set([...(new Set([1,2,3])),
                  ...(new Set([4,5,6]))]);
console.log(s1.size); // 6
