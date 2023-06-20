function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
  } finally {
    console.log('called finally')
  }
}

(async function() {
  try {
for await (let num of generatorWithRejectedPromises()){
      console.log(num);
    }
  } catch (e) {
    console.log('catched', e)
  }
})();
// 0
// 1
// 2
// catched 3

// compare with for-of loop:

try {
  for (let numOrPromise of generatorWithRejectedPromises()){
    console.log(numOrPromise);
  }
} catch (e) {
  console.log('catched', e)
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> 3 }
// 4
// catched 5
// called finally

(async function() {
  try {
for (let numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log('catched', e)
  }
})()
// 0
// 1
// 2
// catched 3
// called finally
