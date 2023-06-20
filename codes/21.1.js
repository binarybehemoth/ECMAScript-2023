   var list = [ "ä", "a", "z" ]
   var l10nDE = new Intl.Collator("de")
   var l10nSV = new Intl.Collator("sv")
   console.log(l10nDE.compare("ä", "z")); // -1
   console.log(l10nSV.compare("ä", "z")); // 1
   console.log(list.sort(l10nDE.compare)); // [ "a", "ä", "z" ]
   console.log(list.sort(l10nSV.compare)); // [ "a", "z", "ä" ]

   console.log(new Intl.Collator('de').compare('ä', 'z')); // -1
   console.log(new Intl.Collator('sv').compare('ä', 'z')); // 1
   console.log(new Intl.Collator('de', 
                    { sensitivity: 'base' }).compare('ä', 'a'));  // 0
   console.log(new Intl.Collator('sv', 
                    { sensitivity: 'base' }).compare('ä', 'a'));  // 1
   console.log(new Intl.Collator('sv', 
                    { sensitivity: 'base' }).resolvedOptions());  
   // Object {locale: "sv", usage: "sort", sensitivity: "base",   
   // ignorePunctuation: false, numeric: false...
	
   var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
   var options = { localeMatcher: 'lookup' };
   console.log(Intl.Collator.supportedLocalesOf(
            locales, options).join(', '));// "id-u-co-pinyin, de-ID"
