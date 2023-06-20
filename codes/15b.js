var m = new Map();

var keyString = 'a string',
      keyObj = {},
      keyFunc = function() {};

m.set(keyString, 1);
m.set(keyObj, 2);
m.set(keyFunc, 3);
m.set(NaN, 4);

m.size; // 4

// getting the values
m.get(keyString);    // 1
m.get(keyObj);       // 2
m.get(keyFunc);      // 3

m.get('a string');   // 1 because keyString === 'a string'
m.get({});           // undefined, because keyObj !== {}
m.get(function() {}) 
               // undefined, because keyFunc !== function () {}
m.get(NaN);          // 4
