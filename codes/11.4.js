   var s = "abCDef";
   console.log(s.valueOf()); // abCDef
   console.log(s.toString()); // abCDef
   console.log(s.repeat(2)); // abCDefabCDef
   console.log(s.concat("ghI")); // abCDefghI
   
   console.log('\u1E9B\u0323'.normalize('NFC')); // ẛ̣
   console.log('\u1E9B\u0323'.normalize('NFD')); // ẛ̣
   console.log('\u1E9B\u0323'.normalize('NFKC')); // ṩ
   console.log('\u1E9B\u0323'.normalize('NFKD')); // ṩ
   
   console.log(s.localeCompare("abCDef"));  // 0
   console.log('ä'.localeCompare('z', 'de')); // -1
   console.log('ä'.localeCompare('a', 'sv', 
                                              { sensitivity: 'base' })); // 1
   
   var s = 'A\uD835\uDC68';
   var strIter = s[Symbol.iterator]();
   console.log(strIter.next().value); // "A"
   console.log(strIter.next().value); // "\uD835\uDC68"
