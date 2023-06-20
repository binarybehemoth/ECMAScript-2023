   var s = "a-bb-ccc-dddd"; 
   console.log(s.replace(/.*/g,"x"));  // xx
   console.log(s.replace(/.*?/g,"x"));  // xax-xbxbx-xcxcxcx-xdxdxdxdx
   console.log(s.replace(/.+/g,"x"));  // x
   console.log(s.replace(/.+?/g,"x")); // xxxxxxxxxxxxx
   console.log(s.replace(/.?/g,"x"));  // xxxxxxxxxxxxxx
   console.log(s.replace(/.??/g,"x")); // xax-xbxbx-xcxcxcx-xdxdxdxdx
   console.log(s.replace(/[^\-]{3}/g,"x"));   // a-bb-x-xd
   console.log(s.replace(/[^\-]{3,}/g,"x"));  // a-bb-x-x
   console.log(s.replace(/[^\-]{3,}?/g,"x")); // a-bb-x-xd
