var a = new Boolean(false);
var b = false;
if (a) console.log("a"); // logged
if (b) console.log("b"); // not logged
if (!0) console.log("!0");  // logged
if ("0") console.log("0");  // logged
if ([]) console.log("[]");  // logged
if ({}) console.log("{}");  // logged
if (document.all) console.log("document.all"); // not logged
