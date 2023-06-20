console.log(Intl.getCanonicalLocales('EN-US'));        // ["en-US"]
console.log(Intl.getCanonicalLocales(['EN-US', 'Fr', 'FR', 
                                     'zh-hans-cn']));   // ["en-US", "fr", "zh-Hans-CN"]
// Intl.getCanonicalLocales('EN_US');   // RangeError
