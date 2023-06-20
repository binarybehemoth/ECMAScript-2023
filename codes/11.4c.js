   var s = "abCDef";
   
   console.log(s.includes("CD")); // true
   console.log(s.startsWith("ab")); // true
   console.log(s.endsWith("Def")); // true

   console.log(s.indexOf("C")); // 2
   console.log(s.lastIndexOf("C")); // 2

   console.log(s.split("CD")); // ["ab","ef"]
   console.log(s.split(/[bD]/,2)); // ["a","C"]
   
   console.log(s.slice(1)); // bCDef
   console.log(s.slice(-4,-2));  // CD
   console.log(s.substr(1)); // bCDef
   console.log(s.substr(1,3)); // bCD
   console.log(s.substring(2)); // CDef
   console.log(s.substring(1,3)); // bC
