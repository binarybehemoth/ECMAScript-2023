var n = 123456.789;

var l10nEN = new Intl.NumberFormat("en-US");
var l10nDE = new Intl.NumberFormat("de-DE");
console.log(l10nEN.format(n)); // 123,456.789
console.log(l10nDE.format(n)); // 123.456,789

var l10nUSD = new Intl.NumberFormat("en-US",  
                            { style: "currency", currency: "USD" });
var l10nGBP = new Intl.NumberFormat("en-GB",  
                            { style: "currency", currency: "GBP" });
var l10nEUR = new Intl.NumberFormat("de-DE",  
                            { style: "currency", currency: "EUR" });
console.log(l10nUSD.format(n)); // $123,456.79
console.log(l10nGBP.format(n)); // £123,456.79
console.log(l10nEUR.format(n)); // 123.456,79 €
console.log(JSON.stringify(l10nEUR.resolvedOptions()));
/* {"locale":"de", "numberingSystem":"latn", "style":"currency", "useGrouping":true, "minimumIntegerDigits":1, "minimumFractionDigits":2, "maximumFractionDigits":2, "currency":"EUR", "currencyDisplay":"symbol"} */

console.log(new Intl.NumberFormat().format(n));           
                                                              // 123,456.789
console.log(new Intl.NumberFormat('de-DE').format(n)); 
                                                              // 123.456,789
console.log(new Intl.NumberFormat('ar-EG').format(n)); 
                                                              // → ١٢٣٤٥٦٫٧٨٩
console.log(new Intl.NumberFormat('en-IN').format(n)); 
                                                              // 1,23,456.789
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(n)); // 一二三,四五六.七八九
console.log(new Intl.NumberFormat(['ban','id']).format(n));  // 123.456,789
                                                             // fallback to 'id'
console.log(Intl.NumberFormat.supportedLocalesOf( ['ban', 'id-u-co-pinyin', 'de-ID'], { localeMatcher: 'lookup' })
.join(', ')); 
// id-u-co-pinyin, de-ID
