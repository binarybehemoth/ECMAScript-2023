   var n = 123.456;
   console.log(n.valueOf());           // 123.456
   console.log(n.toExponential());  // 1.23456e+2
   console.log(n.toExponential(4)); // 1.2346e+2
   console.log(n.toFixed());            // 123
   console.log(n.toFixed(4));          // 123.4560
   console.log(n.toPrecision());       // 123.456
   console.log(n.toPrecision(4));     // 123.5
   console.log(n.toString()+999);   // 123.456999
   console.log(n.toString(16));       // 7b.74bc6a7ef9dc
   console.log((1234567).toLocaleString()); // 1,234,567
   console.log((123.4).toLocaleString(
                         "zh-Hans-CN-u-nu-hanidec")); // 一二三.四
   console.log((2500).toLocaleString("en-GB", {style:     
     "currency", currency: "GBP", minimumFractionDigits: 2}));   //£2,500.00
