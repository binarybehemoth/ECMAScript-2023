str = 'hello world';
iterator = str[Symbol.iterator](); // StringIterator {}
iterator.next(); // gives `h`
//...
//...
iterator.next(); // gives `d`
iterator.next(); // gives `undefined` as no more string left.
